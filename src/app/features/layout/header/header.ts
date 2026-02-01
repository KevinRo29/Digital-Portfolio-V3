import { LucideAngularModule, Menu, X, Sparkles, Github, Linkedin, Mail, } from 'lucide-angular';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'header-layout',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  /** Icons */
  readonly icons = { Menu, X, Sparkles, Github, Linkedin, Mail };

  /** Signal to control the state of the mobile menu */
  readonly isMenuOpen = signal<boolean>(false);

  /** Methods to open and close the mobile menu */
  toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }

  /** Close the menu */
  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
