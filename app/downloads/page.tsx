import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import Button from "@/components/ui/button";
import DownloadList from "@/components/downloads/download-list";
import { downloads } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Request Cradleman product catalogs, brochures, technical documents, and compliance certificates.",
};

export default function DownloadsPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="py-12 text-center md:py-16">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Downloads
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              Product catalogs, brochures, technical specifications, and
              certificates—organized for facility teams and project
              stakeholders.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4">
          <DownloadList items={downloads} />
        </div>
      </Section>

      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <Card className="bg-white dark:bg-gray-800">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Need a customized submission pack?
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Share your project scope and building details—we’ll prepare
                  the right brochures, specifications, and compliance documents.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Link href="/contact">
                  <Button size="lg">
                    Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline">
                    Explore Products
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}


