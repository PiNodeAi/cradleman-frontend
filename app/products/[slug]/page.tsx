import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Section from "@/components/layout/section";
import { Card } from "@/components/ui/card";
import Button from "@/components/ui/button";
import { products } from "@/lib/constants";

interface ProductPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return { title: "Product Not Found" };

  // Convert ImageSource to OpenGraph image format
  const firstImage = product.images[0];
  const imageUrl =
    typeof firstImage === "string" ? firstImage : firstImage.src;

  return {
    title: product.title,
    description: product.shortDescription,
    openGraph: {
      title: product.title,
      description: product.shortDescription,
      images: [
        {
          url: imageUrl,
          alt: product.title,
        },
      ],
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="py-12 md:py-16">
            <div className="mb-6">
              <Link
                href="/products"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-400"
              >
                ← Back to Products
              </Link>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
              {product.title}
            </h1>
            <p className="mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-300">
              {product.description}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact">
                <Button size="lg">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href={product.brochureHref || "/downloads"}>
                <Button size="lg" variant="outline">
                  {product.brochureLabel || "Downloads"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="relative h-72 overflow-hidden rounded-lg md:h-96">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                Features & Benefits
              </h2>
              <div className="space-y-3">
                {product.features.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-primary-600 dark:text-primary-400" />
                    <p className="text-gray-700 dark:text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Technical Specifications
              </h3>
              <dl className="space-y-3">
                {product.specifications.map((s) => (
                  <div key={s.label} className="flex flex-col gap-1">
                    <dt className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {s.label}
                    </dt>
                    <dd className="text-gray-600 dark:text-gray-300">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Card>
            <Card>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Applications
              </h3>
              <ul className="space-y-2">
                {product.applications.map((a) => (
                  <li key={a} className="text-gray-600 dark:text-gray-300">
                    • {a}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section>
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Related Products
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <Link key={p.id} href={`/products/${p.slug}`} className="group">
                  <Card hover className="flex flex-col">
                    <div className="relative mb-4 h-44 w-full overflow-hidden rounded-lg">
                      <Image
                        src={p.images[0]}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                      {p.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {p.shortDescription}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}


