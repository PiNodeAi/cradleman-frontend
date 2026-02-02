"use client";

import * as React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import type { GalleryItem } from "@/types";

const categories: Array<GalleryItem["category"] | "All"> = [
  "All",
  "Products",
  "Projects",
  "Installations",
];

export default function FilterableGallery({
  items,
}: {
  items: GalleryItem[];
}) {
  const [active, setActive] = React.useState<(typeof categories)[number]>("All");
  const [selected, setSelected] = React.useState<GalleryItem | null>(null);

  const filtered =
    active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={cn(
              "rounded-lg border px-4 py-2 text-sm font-medium transition-colors",
              active === c
                ? "border-primary-600 bg-primary-600 text-white"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item)}
            className="text-left"
          >
            <Card hover className="flex flex-col">
              <div className="relative mb-3 h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-sm text-primary-600 dark:text-primary-400">
                {item.category}
              </div>
              <div className="mt-1 font-semibold text-gray-900 dark:text-white">
                {item.title}
              </div>
            </Card>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-2 top-2 rounded-lg bg-white/90 p-2 text-gray-900 shadow hover:bg-white"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-black">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-3 text-white">
              <div className="text-sm opacity-90">{selected.category}</div>
              <div className="text-lg font-semibold">{selected.title}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


