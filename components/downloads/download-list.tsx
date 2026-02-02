"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import Button from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { DownloadItem } from "@/types";

export default function DownloadList({ items }: { items: DownloadItem[] }) {
  const [busyId, setBusyId] = React.useState<string | null>(null);

  const request = async (item: DownloadItem) => {
    try {
      setBusyId(item.id);
      await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: item.id, title: item.title }),
      });
    } finally {
      setBusyId(null);
      window.location.href = `/contact?download=${encodeURIComponent(item.title)}`;
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((d) => (
        <Card key={d.id} className="flex flex-col">
          <div className="text-sm text-primary-600 dark:text-primary-400">
            {d.category}
          </div>
          <div className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
            {d.title}
          </div>
          {d.description && (
            <p className="mt-2 flex-grow text-gray-600 dark:text-gray-300">
              {d.description}
            </p>
          )}

          <div className="mt-5 flex flex-col gap-3">
            {d.href && !d.requestOnly ? (
              <Link href={d.href}>
                <Button className="w-full">
                  Download <Download className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            ) : (
              <Button
                variant="outline"
                className="w-full"
                isLoading={busyId === d.id}
                onClick={() => request(d)}
              >
                Request via Contact Form <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}


