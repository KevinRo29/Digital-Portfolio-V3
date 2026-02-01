import { Component, HostListener, signal } from '@angular/core';
import { Header } from './features/layout/header/header';
import { Footer } from './features/layout/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  // Signal para controlar el ancho de la barra de progreso
  scrolled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Cambia a true si el usuario ha bajado más de 50px
    this.scrolled.set(window.scrollY > 50);
  }

}
