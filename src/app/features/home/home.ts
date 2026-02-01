import { Component } from '@angular/core';
import {
  LucideAngularModule,
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
} from 'lucide-angular';

@Component({
  selector: 'app-home',
  imports: [LucideAngularModule],
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
}
