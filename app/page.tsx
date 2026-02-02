import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Section from "@/components/layout/section";
import Button from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ServiceIcon from "@/components/ui/service-icon";
import {
  services,
  testimonials,
  companyStats,
  blogPosts,
  caseStudies,
  products,
  clients,
  companyName,
  companyTagline,
} from "@/lib/constants";
import { formatDate } from "@/lib/utils";

export default function HomePage() {
  const featuredServices = services.filter((s) => s.featured).slice(0, 3);
  const featuredBlogPosts = blogPosts.filter((p) => p.featured).slice(0, 3);
  const featuredCaseStudies = caseStudies.filter((c) => c.featured).slice(0, 3);
  const featuredProducts = products.filter((p) => p.featured).slice(0, 4);
  const featuredClients = clients.filter((c) => c.featured).slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center py-20 text-center md:py-32">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              {companyTagline}
              <span className="block text-primary-600 dark:text-primary-400">
                Facade Access and Cleaning Systems
              </span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300 md:text-xl">
              {companyName} is a trusted name in designing, supplying,
              manufacturing, installing, and maintaining complete building
              maintenance solutions—all services under one roof.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact">
                <Button size="lg">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline">
                  Explore Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-primary-600 text-white dark:bg-primary-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {companyStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 text-4xl font-bold md:text-5xl">
                  {stat.prefix}
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-sm opacity-90 md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Products */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Featured Products
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              Permanent and temporary access solutions designed for commercial
              buildings and facilities.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((p) => (
              <Card key={p.id} hover className="flex flex-col">
                <div className="relative mb-4 h-40 w-full overflow-hidden rounded-lg">
                  <Image src={p.images[0]} alt={p.title} fill className="object-cover" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="mb-4 flex-grow text-gray-600 dark:text-gray-300">
                  {p.shortDescription}
                </p>
                <Link href={`/products/${p.slug}`}>
                  <Button variant="ghost" size="sm" className="w-full">
                    View Product <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/products">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Services Overview */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              End-to-end services—from design and installation to maintenance,
              cleaning support, and preventive programs.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <Card key={service.id} hover className="flex flex-col">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                  <ServiceIcon iconName={service.icon} className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mb-4 flex-grow text-gray-600 dark:text-gray-300">
                  {service.shortDescription}
                </p>
                <Link href={`/services/${service.slug}`}>
                  <Button variant="ghost" size="sm" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* About Brief */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                Why {companyName}
              </h2>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                Commercial buildings need reliable, repeatable exterior
                maintenance. We combine engineering discipline with
                site-ready execution so your teams can plan safely, deliver
                consistent quality, and reduce downtime.
              </p>
              <p className="mb-8 text-gray-600 dark:text-gray-300">
                We follow CE Regulation and BS EN-1808 standards for suspended
                access equipment with support from European technical
                collaborators, prioritizing technology, quality, and customer
                satisfaction.
              </p>
              <Link href="/about">
                <Button>
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg md:h-96">
              <Image
                src="/images/gallery/installation-1.svg"
                alt="Facade access installation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Case Studies */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Projects & Installations
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              A few examples of how we support safe access for cleaning,
              inspection, and restoration work.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredCaseStudies.map((study) => (
              <Card key={study.id} hover className="flex flex-col">
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {study.title}
                </h3>
                <p className="mb-4 flex-grow text-gray-600 dark:text-gray-300">
                  {study.description}
                </p>
                <Link href={`/portfolio/${study.slug}`}>
                  <Button variant="ghost" size="sm" className="w-full">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/portfolio">
              <Button variant="outline" size="lg">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Clients */}
      <Section className="bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Industries We Support
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              Trusted by clients such as Larsen & Toubro, Sheth Developers, and
              InterContinental Hotel The Lalit—along with facilities and
              contractors across India.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredClients.map((c) => (
              <Card key={c.id} hover>
                <div className="text-sm text-primary-600 dark:text-primary-400">
                  {c.industry}
                </div>
                <div className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
                  {c.name}
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/clients">
              <Button variant="outline" size="lg">
                View Clients <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              Reliable. Measurable. On demand—delivered through standardized
              processes and responsive support.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((testimonial) => (
              <Card key={testimonial.id} className="flex flex-col">
                <div className="mb-4 flex items-center space-x-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
                <p className="mb-4 flex-grow italic text-gray-700 dark:text-gray-300">
                  "{testimonial.quote}"
                </p>
                <div className="flex text-yellow-400">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <CheckCircle2 key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Blog Preview */}
      <Section>
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Insights for Facilities Teams
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300">
              Practical guidance for safer operations, repeatable quality, and
              long-term reliability.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredBlogPosts.map((post) => (
              <Card key={post.id} hover className="flex flex-col">
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  {formatDate(post.publishedAt)} · {post.readingTime} min read
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="mb-4 flex-grow text-gray-600 dark:text-gray-300">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="ghost" size="sm" className="w-full">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/blog">
              <Button variant="outline" size="lg">
                View All Insights
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white dark:from-primary-700 dark:to-secondary-700">
        <div className="container mx-auto px-4">
          <div className="py-16 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Need safe access for facade maintenance?
            </h2>
            <p className="mb-8 mx-auto max-w-2xl text-lg opacity-90">
              Tell us your building type, elevation constraints, and maintenance
              frequency—we’ll recommend the right system and a precision plan.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Get a Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

