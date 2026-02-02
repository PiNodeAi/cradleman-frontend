import { Metadata } from "next";
import Section from "@/components/layout/section";
import { companyName, contactInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie Policy for ${companyName}`,
};

export default function CookiesPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="py-12 md:py-16">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Cookie Policy
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
            <h2>What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or
              mobile device when you visit a website. They are widely used to make
              websites work more efficiently and provide information to website
              owners.
            </p>

            <h2>How We Use Cookies</h2>
            <p>{companyName} uses cookies for the following purposes:</p>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> Required for the website to
                function properly
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how
                visitors interact with our website
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your preferences
                and settings
              </li>
              <li>
                <strong>Marketing Cookies:</strong> Used to deliver relevant
                advertisements
              </li>
            </ul>

            <h2>Managing Cookies</h2>
            <p>
              You can control and manage cookies in various ways. Most browsers
              allow you to refuse or accept cookies. However, disabling cookies
              may limit your ability to use certain features of our website.
            </p>

            <h2>Third-Party Cookies</h2>
            <p>
              We may use third-party services that set cookies on your device.
              These services help us analyze website usage and improve our
              services.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us at{" "}
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

