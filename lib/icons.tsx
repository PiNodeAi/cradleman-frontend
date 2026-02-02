import {
  Brain,
  Cloud,
  Smartphone,
  Database,
  Shield,
  TrendingUp,
  Building2,
  Sparkles,
  Wrench,
  HardHat,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Brain,
  Cloud,
  Smartphone,
  Database,
  Shield,
  TrendingUp,
  Building2,
  Sparkles,
  Wrench,
  HardHat,
};

export function getIcon(name: string): LucideIcon | null {
  return iconMap[name] || null;
}

