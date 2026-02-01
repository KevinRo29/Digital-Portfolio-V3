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

  readonly skillsAside = 'Experiencia en proyectos de empresa con foco en resultados. Los proyectos personales llegarán pronto y serán el espacio para experimentar.';

  readonly skillsCards: SectionCard[] = [
    {
      icon: Palette,
      title: 'UI para producto',
      description: 'Interfaces consistentes y orientadas a negocio dentro de equipos de producto.',
    },
    {
      icon: Rocket,
      title: 'Ejecución en equipo',
      description: 'Colaboración con PM y devs para aterrizar requerimientos y mejorar flujos.',
    },
    {
      icon: Code2,
      title: 'Frontend Delivery',
      description: 'Implementación con Angular, Bootstrap y buenas prácticas en proyectos reales.',
    },
  ];

  readonly projectsCards: SectionCard[] = [
    {
      eyebrow: 'Optimización',
      title: 'Aplicación 95% más eficiente',
      description: 'Optimización integral que redujo tiempos de carga y mejoró el rendimiento hasta en 95%.',
      tags: ['Performance', 'Angular'],
    },
    {
      eyebrow: 'CRM',
      title: 'Homologación y actualización desde cero',
      description: 'Unificación de procesos y rediseño completo para un CRM actualizado desde 0.',
      tags: ['Product Design', 'Bootstrap'],
    },
    {
      eyebrow: 'Proyecto personal',
      title: 'En construcción',
      description: 'Próximamente compartiré casos personales y exploraciones de producto.',
      tags: ['Side Project', 'Exploración'],
    },
  ];
}
