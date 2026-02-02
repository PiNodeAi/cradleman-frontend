import { Metadata } from "next";
import Section from "@/components/layout/section";
import { companyName, contactInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${companyName}`,
};

export default function TermsPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="py-12 md:py-16">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Terms of Service
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4">
          <div className="prose prose-lg mx-auto max-w-3xl dark:prose-invert">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing and using {companyName}'s website and services, you
              agree to be bound by these Terms of Service and all applicable laws
              and regulations.
            </p>

            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily access the materials on{" "}
              {companyName}'s website for personal, non-commercial transitory
              viewing only.
            </p>

            <h2>Services</h2>
            <p>
              {companyName} provides building maintenance access solutions,
              including facade access systems and suspended platform equipment,
              along with related services such as installation, commissioning,
              training, inspections, and preventive maintenance. All services are
              subject to separate proposals and/or service agreements.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              The materials on this website, including but not limited to text,
              graphics, logos, and software, are the property of {companyName}{" "}
              and are protected by copyright and trademark laws.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              In no event shall {companyName} or its suppliers be liable for any
              damages arising out of the use or inability to use the materials on
              this website.
            </p>

            <h2>Revisions</h2>
            <p>
              {companyName} may revise these terms at any time without notice. By
              using this website, you are agreeing to be bound by the then current
              version of these Terms of Service.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at{" "}
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-primary-600"
              >
                {contactInfo.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

