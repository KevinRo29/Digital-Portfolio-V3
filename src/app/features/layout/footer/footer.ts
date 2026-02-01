import { LucideAngularModule, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-angular';
import { Component } from '@angular/core';

@Component({
  selector: 'footer-layout',
  imports: [LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  /** Icons used in the footer component */
  readonly icons = { Github, Linkedin, Mail, ArrowUpRight };

  /** Current year for copyright display */
  readonly currentYear = new Date().getFullYear();

}
