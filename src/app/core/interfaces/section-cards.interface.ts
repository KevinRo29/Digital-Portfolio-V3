import type { LucideIconNode } from 'lucide-angular';

export interface SectionCard {
  title: string;
  description: string;
  icon?: ReadonlyArray<LucideIconNode>;
  eyebrow?: string;
  tags?: string[];
}
