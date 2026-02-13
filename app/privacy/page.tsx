import { Metadata } from "next";
import Section from "@/components/layout/section";
import { companyName, contactInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${companyName}`,
};

export default function PrivacyPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="py-12 md:py-16">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Privacy Policy
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
            <h2>Introduction</h2>
            <p>
              {companyName} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting
              your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website
              and use our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect information about you in a variety of ways:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address, phone
                number, and other contact information you provide to us.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you access and
                use our website, including IP address, browser type, and pages
                visited.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies and similar tracking
                technologies to track activity on our website.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Monitor and analyze usage patterns</li>
              <li>Detect and prevent fraud</li>
            </ul>

            <h2>Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal information. We may share your
              information with:
            </p>
            <ul>
              <li>Service providers who assist us in operating our website</li>
              <li>Business partners for joint services</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your personal information. However, no method of
              transmission over the Internet is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at{" "}
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

