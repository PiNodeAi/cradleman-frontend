import { getIcon } from "@/lib/icons";
import { type LucideIcon } from "lucide-react";

interface ServiceIconProps {
  iconName: string;
  className?: string;
}

export default function ServiceIcon({ iconName, className }: ServiceIconProps) {
  const Icon = getIcon(iconName) as LucideIcon | null;

  if (!Icon) {
    return <div className={className}>📦</div>;
  }

  return <Icon className={className} />;
}

