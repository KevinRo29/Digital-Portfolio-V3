import { LucideAngularModule, Sparkles, ArrowUpRight, Code2, Palette, Rocket, Star, Check, Globe, Zap, Shield, TrendingUp, Briefcase } from 'lucide-angular';
import { SectionCards } from '@shared/section-cards/section-cards';
import { SectionCard } from '@interfaces/section-cards.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [LucideAngularModule, SectionCards],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly icons = {
    Sparkles,
    ArrowUpRight,
    Code2,
    Palette,
    Rocket,
    Star,
    Check,
    Globe,
    Zap,
    Shield,
    TrendingUp,
    Briefcase,
  };

  readonly skillsAside = 'Soluciones integrales desde discovery hasta el lanzamiento, con foco en conversiones y retención.';

  readonly skillsCards: SectionCard[] = [
    {
      icon: Palette,
      title: 'Brand & UI Design',
      description: 'Interfaces coherentes, modernas y con identidad sólida para productos digitales.',
    },
    {
      icon: Rocket,
      title: 'Product Strategy',
      description: 'Definición de roadmap, MVP y métricas para acelerar el time-to-market.',
    },
    {
      icon: Code2,
      title: 'Frontend Delivery',
      description: 'Implementación precisa con Angular, Bootstrap y mejores prácticas.',
    },
  ];

  readonly projectsCards: SectionCard[] = [
    {
      eyebrow: 'Fintech',
      title: 'Dashboard analítico 360°',
      description: 'Incremento del 32% en retención con nuevo flujo de onboarding.',
      tags: ['UX Research', 'Angular'],
    },
    {
      eyebrow: 'SaaS',
      title: 'Sistema de pricing inteligente',
      description: '+18% conversión con narrativa visual y microinteracciones.',
      tags: ['UI Design', 'Bootstrap'],
    },
    {
      eyebrow: 'E-commerce',
      title: 'Checkout de alta conversión',
      description: 'Reducción del 27% en abandono del carrito.',
      tags: ['Product Design', 'A/B Testing'],
    },
  ];
}
