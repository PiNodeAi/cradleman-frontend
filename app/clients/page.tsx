import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { clients, testimonials, caseStudies } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Cradleman serves reputed clients across construction, real estate, and hospitality with facade access and cleaning systems.",
};

export default function ClientsPage() {
  const highlights = caseStudies.slice(0, 3);

  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="py-12 text-center md:py-16">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Clients We Support
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              We are proud to serve clients such as Larsen & Toubro, Sheth
              Developers, and InterContinental Hotel The Lalit, along with
              facility teams across India.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((c) => (
              <Card key={c.id} hover>
                <div className="text-sm text-primary-600 dark:text-primary-400">
                  {c.industry || "Client"}
                </div>
                <div className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
                  {c.name}
                </div>
                {c.location && (
                  <div className="mt-2 text-gray-600 dark:text-gray-300">
                    {c.location}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              What Clients Say
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              Quality, safety, and measurable results—delivered through
              standardized processes and responsive support.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((t) => (
              <Card key={t.id} className="flex flex-col">
                <div className="mb-4 flex items-center space-x-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {t.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">“{t.quote}”</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Project Highlights
              </h2>
              <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-300">
                A few examples of how we plan, install, and support safe access
                for ongoing exterior maintenance.
              </p>
            </div>
            <Link href="/portfolio" className="hidden sm:block">
              <Button variant="outline">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h) => (
              <Link key={h.id} href={`/portfolio/${h.slug}`} className="group">
                <Card hover className="flex flex-col">
                  <div className="relative mb-4 h-44 w-full overflow-hidden rounded-lg">
                    <Image
                      src={h.image}
                      alt={h.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="text-sm text-primary-600 dark:text-primary-400">
                    {h.category}
                  </div>
                  <div className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
                    {h.title}
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    {h.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center sm:hidden">
            <Link href="/portfolio">
              <Button variant="outline">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}


