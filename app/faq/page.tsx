"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import Section from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import { faqs } from "@/lib/constants";
import { cn } from "@/lib/utils";

const categories = [
  { id: "all", label: "All" },
  { id: "general", label: "General" },
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "process", label: "Process" },
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [openItems, setOpenItems] = React.useState<Set<string>>(new Set());

  const filteredFAQs =
    selectedCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <>
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="py-12 text-center md:py-16">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Find answers to common questions about our services, process, and
              more
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ Content */}
      <Section>
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
                  selectedCategory === category.id
                    ? "border-primary-600 bg-primary-600 text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <Card key={faq.id} className="overflow-hidden">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-gray-500 transition-transform",
                      openItems.has(faq.id) && "rotate-180"
                    )}
                  />
                </button>
                {openItems.has(faq.id) && (
                  <div className="mt-4 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Still have questions */}
          <Card className="mt-12 bg-primary-50 text-center dark:bg-primary-900/20">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              Still have questions?
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              Can't find the answer you're looking for? Please get in touch with
              our friendly team.
            </p>
            <a
              href="/contact"
              className="inline-block rounded-lg bg-primary-600 px-6 py-3 font-medium text-white transition-colors hover:bg-primary-700"
            >
              Contact Us
            </a>
          </Card>
        </div>
      </Section>
    </>
  );
}

