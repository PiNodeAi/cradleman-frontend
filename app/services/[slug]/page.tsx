import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Section from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import Button from "@/components/ui/button";
import ServiceIcon from "@/components/ui/service-icon";
import { services } from "@/lib/constants";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="py-12 md:py-16">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
              <ServiceIcon iconName={service.icon} className="h-8 w-8" />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              {service.title}
            </h1>
            <p className="mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
            <Link href="/contact">
              <Button size="lg">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Key Benefits
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {service.benefits.map((benefit, index) => (
              <Card key={index} className="flex items-start space-x-4">
                <CheckCircle2 className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary-600 dark:text-primary-400" />
                <p className="text-gray-700 dark:text-gray-300">{benefit}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Our Process
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step) => (
              <Card key={step.step} className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white">
                  {step.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary-600 to-secondary-600 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Want a site-specific plan?
            </h2>
            <p className="mb-8 mx-auto max-w-2xl text-lg opacity-90">
              Share drawings, elevation constraints, and maintenance frequency—
              we’ll propose the safest and most efficient approach for{" "}
              {service.title}.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Contact Us <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Card>
        </div>
      </Section>
    </>
  );
}

