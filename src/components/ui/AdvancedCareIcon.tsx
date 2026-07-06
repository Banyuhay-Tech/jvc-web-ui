import type { LucideIcon } from 'lucide-react';
import { ScanLine, Siren, Cross, HeartHandshake } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  laboratory: ScanLine,
  emergency: Siren,
  procedures: Cross,
  healing: HeartHandshake,
};

export type AdvancedCareIconName = keyof typeof iconMap;

interface AdvancedCareIconProps {
  name: AdvancedCareIconName;
  className?: string;
  size?: number;
}

export function AdvancedCareIcon({ name, className, size = 52 }: AdvancedCareIconProps) {
  const Icon = iconMap[name] ?? Cross;
  return <Icon className={className} size={size} strokeWidth={1.5} aria-hidden />;
}
