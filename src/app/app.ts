
import { Component, signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HeaderComponent } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('tartans4defense');

  constructor(private router: Router) {}

  openReviewForm(): void {
    this.router.navigate(['/review-system']);
  }
}