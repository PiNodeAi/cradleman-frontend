import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import Button from "@/components/ui/button";
import CareerForm from "@/components/forms/career-form";
import { jobOpenings, companyName, contactInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Explore careers at Cradleman. Join a team trained in facade access and cleaning systems with a strong focus on safety.",
};

export default function CareerPage() {
  const positions = jobOpenings.map((j) => ({
    label: `${j.title} · ${j.location}`,
    value: j.title,
  }));

  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="py-12 text-center md:py-16">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Careers at {companyName}
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              Our teams work on facade access and cleaning systems using BMUs,
              scaffolding, rope access, cradles, and platforms. If you care
              about safety, quality, and dependable delivery, we’d love to hear
              from you.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Open Roles
              </h2>
              <div className="space-y-6">
                {jobOpenings.map((job) => (
                  <Card key={job.id}>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="text-xl font-semibold text-gray-900 dark:text-white">
                          {job.title}
                        </div>
                        <div className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                          {job.department} · {job.location} · {job.type}
                        </div>
                      </div>
                      <Link href="#apply">
                        <Button variant="outline" size="sm">
                          Apply <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                    <p className="mt-4 text-gray-700 dark:text-gray-300">
                      {job.summary}
                    </p>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">
                          Responsibilities
                        </div>
                        <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                          {job.responsibilities.slice(0, 4).map((r) => (
                            <li key={r}>• {r}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">
                          Requirements
                        </div>
                        <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                          {job.requirements.slice(0, 4).map((r) => (
                            <li key={r}>• {r}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
                <Card className="bg-gray-50 dark:bg-gray-900">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">
                    Don’t see a role that fits?
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Send your profile anyway. We’re always interested in strong
                    engineering, projects, and service talent.
                  </p>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                    Email:{" "}
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="font-medium text-primary-600 hover:underline dark:text-primary-400"
                    >
                      {contactInfo.email}
                    </a>
                  </p>
                </Card>
              </div>
            </div>

            <div id="apply">
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Apply / Enquiry
              </h2>
              <CareerForm positions={positions} />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}


