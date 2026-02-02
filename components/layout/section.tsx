import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
}

export default function Section({
  className,
  container = true,
  children,
  ...props
}: SectionProps) {
  const content = container ? (
    <div className="container mx-auto px-4">{children}</div>
    ) : (
      children
    );

  return (
    <section
      className={cn("py-12 md:py-16 lg:py-20", className)}
      {...props}
    >
      {content}
    </section>
  );
}

