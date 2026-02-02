import { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Section from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import ContactForm from "@/components/forms/contact-form";
import { contactInfo, companyName } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Cradleman for facade access systems, suspended platforms, and building maintenance solutions. Request a quote or schedule a site assessment.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="py-12 text-center md:py-16">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Contact Us
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Need safe access for facade maintenance, cleaning, inspection, or
              restoration? Share your site details and we’ll respond with the
              next steps.
            </p>
          </div>
        </div>
      </Section>

      {/* Contact Form and Info */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Send us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Contact Information
              </h2>
              <div className="space-y-6">
                <Card>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                        Email
                      </h3>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                        Phone
                      </h3>
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-gray-600 transition-colors hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                        Address
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
                        Office Hours
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {contactInfo.officeHours}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Find Us
            </h2>
            <div className="h-96 w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
              <iframe
                src="https://www.google.com/maps?q=Mumbai%2C%20India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

