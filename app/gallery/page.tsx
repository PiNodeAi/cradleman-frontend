import { Metadata } from "next";
import Section from "@/components/layout/section";
import FilterableGallery from "@/components/gallery/filterable-gallery";
import { galleryItems } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse Cradleman products, projects, and installations. Filter by category and preview images in a lightbox.",
};

export default function GalleryPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="py-12 text-center md:py-16">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Gallery
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              A quick look at products, project planning, installations, and
              commissioning—built for safe access and predictable outcomes.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4">
          <FilterableGallery items={galleryItems} />
        </div>
      </Section>
    </>
  );
}


