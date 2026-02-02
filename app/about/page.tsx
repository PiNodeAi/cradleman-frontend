import { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { teamMembers, companyName } from "@/lib/constants";
import { Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Cradleman—our mission, values, and the team behind our facade access and cleaning systems.",
};

const values = [
  {
    title: "Best Technology",
    description:
      "We adopt proven engineering methods and reliable equipment for building maintenance access.",
  },
  {
    title: "Quality Products",
    description:
      "We focus on durable systems and consistent performance from design to installation.",
  },
  {
    title: "Customer Satisfaction",
    description:
      "We stay responsive across the project lifecycle and aim for long-term partnerships.",
  },
  {
    title: "Safety & Compliance",
    description:
      "Our systems follow CE Regulation and BS EN-1808 safety requirements for suspended access equipment.",
  },
];

const milestones = [
  { year: "10+ Years", event: "Experience in designing and installing BMU systems" },
  { year: "Growth", event: "Established as a promising facade access manufacturer" },
  { year: "Network", event: "Strong marketing and execution teams across India" },
  { year: "Standards", event: "Aligned with CE Regulation and BS EN-1808" },
  { year: "Support", event: "Lifecycle services: design → install → maintain" },
  { year: "Today", event: "Committed to technology, quality, and safety" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="py-12 text-center md:py-16">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              About {companyName}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              We design, supply, manufacture, install, and maintain facade
              access and cleaning systems—helping commercial buildings stay
              safe, clean, and maintainable.
            </p>
          </div>
        </div>
      </Section>

      {/* Company Story */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  {companyName} is a trusted name in the design, manufacturing,
                  and supply of complete building maintenance solutions—bringing
                  all services under one roof.
                </p>
                <p>
                  Our sales, engineering, and design teams bring more than 10
                  years of experience in proposing, designing, and installing
                  building maintenance units for reputed clients.
                </p>
                <p>
                  Backed by European technical collaborators, we deliver facade
                  access and cleaning systems that follow CE Regulation and BS
                  EN-1808 safety requirements.
                </p>
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg md:h-96">
              <Image
                src="/images/gallery/installation-2.svg"
                alt="Commissioning and handover"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Mission */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              To provide complete building maintenance solutions with the right
              balance of safety, engineering, quality products, and customer
              satisfaction.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Our Values
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <Card key={value.title} hover className="text-center">
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Our Team
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              Meet the talented individuals who make it all possible
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center">
                <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="mb-3 text-primary-600 dark:text-primary-400">
                  {member.role}
                </p>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
                  {member.bio}
                </p>
                {member.social && (
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Our Journey
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              Key milestones in our company's history
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-primary-200 dark:bg-primary-800 md:block" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  <div className="flex-1 text-right md:w-1/2">
                    {index % 2 === 0 && (
                      <Card>
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          {milestone.year}
                        </div>
                        <div className="mt-2 text-gray-900 dark:text-white">
                          {milestone.event}
                        </div>
                      </Card>
                    )}
                  </div>
                  <div className="hidden h-4 w-4 rounded-full bg-primary-600 dark:bg-primary-400 md:block" />
                  <div className="flex-1 text-left md:w-1/2">
                    {index % 2 !== 0 && (
                      <Card>
                        <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                          {milestone.year}
                        </div>
                        <div className="mt-2 text-gray-900 dark:text-white">
                          {milestone.event}
                        </div>
                      </Card>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

