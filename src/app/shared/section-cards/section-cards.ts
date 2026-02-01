import { SectionCardsVariant } from '../../core/types/section-cards.types';
import { LucideAngularModule, type LucideIconNode } from 'lucide-angular';
import { SectionCard } from '@interfaces/section-cards.interface';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'section-cards',
  imports: [NgClass, RouterLink, LucideAngularModule],
  templateUrl: './section-cards.html',
  styleUrl: './section-cards.scss',
})
export class SectionCards {

  @Input({ required: true }) sectionId = '';
  @Input({ required: true }) sectionClass = '';
  @Input({ required: true }) eyebrow = '';
  @Input({ required: true }) title = '';
  @Input() description = '';
  @Input() asideText = '';
  @Input() ctaLabel = '';
  @Input() ctaFragment = '';
  @Input() ctaRoute: string | string[] = '/home';
  @Input() ctaIcon?: ReadonlyArray<LucideIconNode>;
  @Input() variant: SectionCardsVariant = 'skills';
  @Input({ required: true }) items: SectionCard[] = [];

}
