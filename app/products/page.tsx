import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Section from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { products } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Cradleman products including permanent access systems, monorail suspension systems, power suspended cradles, and temporary/manual access systems.",
};

export default function ProductsPage() {
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="py-12 text-center md:py-16">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              Products
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              Designed for safe access at height—engineered solutions that help
              facility and project teams maintain building exteriors with
              repeatable, measurable outcomes.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id} hover className="flex flex-col">
                <div className="relative mb-4 h-44 w-full overflow-hidden rounded-lg">
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    fill
                    className="object-cover"
                    priority={featured.some((p) => p.id === product.id)}
                  />
                </div>
                <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {product.title}
                </h2>
                <p className="mb-4 flex-grow text-gray-600 dark:text-gray-300">
                  {product.shortDescription}
                </p>
                <Link href={`/products/${product.slug}`}>
                  <Button variant="ghost" size="sm" className="w-full">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-primary-600 to-secondary-600 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Need help choosing the right system?
            </h2>
            <p className="mb-8 mx-auto max-w-2xl text-lg opacity-90">
              Share your building drawings or site constraints—our team will
              recommend the safest and most efficient access approach.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Card>
        </div>
      </Section>
    </>
  );
}


