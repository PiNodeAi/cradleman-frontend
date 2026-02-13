import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Section from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { caseStudies } from "@/lib/constants";

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
    };
  }

  return {
    title: study.title,
    description: study.description,
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="py-12 md:py-16">
            <div className="mb-4 text-sm text-primary-600 dark:text-primary-400">
              {study.category} · {study.client}
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              {study.title}
            </h1>
            <p className="mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              {study.description}
            </p>
          </div>
        </div>
      </Section>

      {/* Main Image */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="relative h-96 w-full overflow-hidden rounded-lg">
            <Image
              src={study.image}
              alt={study.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Challenge & Solution */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <Card>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                The Challenge
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {study.challenge}
              </p>
            </Card>
            <Card>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Our Solution
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {study.solution}
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Results */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Results
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {study.results.map((result, index) => (
              <Card key={index} className="flex items-start space-x-4">
                <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary-600 dark:text-primary-400" />
                <p className="text-gray-700 dark:text-gray-300">{result}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Technologies & Services */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-primary-100 px-3 py-1 text-sm text-primary-700 dark:bg-primary-900/50 dark:text-primary-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
            <Card>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Services Provided
              </h3>
              <ul className="space-y-2">
                {study.services.map((service) => (
                  <li
                    key={service}
                    className="text-gray-600 dark:text-gray-300"
                  >
                    • {service}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      {study.clientTestimonial && (
        <Section className="bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <Card className="bg-white dark:bg-gray-800">
              <p className="mb-4 text-lg italic text-gray-700 dark:text-gray-300">
                &ldquo;{study.clientTestimonial.quote}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {study.clientTestimonial.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {study.clientTestimonial.role}
                </div>
              </div>
            </Card>
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section>
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary-600 to-secondary-600 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Start Your Project?
            </h2>
            <p className="mb-8 mx-auto max-w-2xl text-lg opacity-90">
              Let&apos;s discuss how we can help you achieve similar results.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Card>
        </div>
      </Section>
    </>
  );
}

