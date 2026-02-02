import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import Button from "@/components/ui/button";
import ServiceIcon from "@/components/ui/service-icon";
import { services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Facade access systems, glass facade cleaning support, facade restoration access planning, and temporary suspended platforms.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="py-12 text-center md:py-16">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Our Services
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              End-to-end building maintenance services—planned for safety,
              repeatability, and measurable quality.
            </p>
          </div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.id} hover className="flex flex-col">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                  <ServiceIcon iconName={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mb-4 flex-grow text-gray-600 dark:text-gray-300">
                  {service.shortDescription}
                </p>
                <Link href={`/services/${service.slug}`}>
                  <Button variant="ghost" size="sm" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

