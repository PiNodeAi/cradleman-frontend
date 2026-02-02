import Link from "next/link";
import { Home } from "lucide-react";
import Section from "@/components/layout/section";
import Button from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="py-20 text-center">
          <h1 className="mb-4 text-6xl font-bold text-gray-900 dark:text-white md:text-8xl">
            404
          </h1>
          <h2 className="mb-4 text-2xl font-semibold text-gray-700 dark:text-gray-300 md:text-3xl">
            Page Not Found
          </h2>
          <p className="mb-8 mx-auto max-w-md text-gray-600 dark:text-gray-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <Button size="lg">
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}

