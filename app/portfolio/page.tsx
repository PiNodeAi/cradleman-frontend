import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Section from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { caseStudies } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Cradleman projects and installations: facade access planning, retrofits, temporary access deployments, and commissioning support.",
};

const categories = [
  "All",
  "Facade Access",
  "Retrofit",
  "Temporary Access",
  "Installation",
  "Commissioning",
  "Maintenance",
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="py-12 text-center md:py-16">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Projects & Installations
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Examples of how we design, install, commission, and support safe
              access for building exterior maintenance.
            </p>
          </div>
        </div>
      </Section>

      {/* Filter */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Card key={study.id} hover className="flex flex-col">
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mb-2 text-sm text-primary-600 dark:text-primary-400">
                  {study.category}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {study.title}
                </h3>
                <p className="mb-4 flex-grow text-gray-600 dark:text-gray-300">
                  {study.description}
                </p>
                <Link href={`/portfolio/${study.slug}`}>
                  <Button variant="ghost" size="sm" className="w-full">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
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

