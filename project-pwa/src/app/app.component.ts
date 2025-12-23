import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-pwa';

  private readonly animateCss = 'assets/css/animate.css';

  ngOnInit(): void {
    this.loadStyle(this.animateCss);
  }

  private loadStyle(url: string): void {
    const placeholder = document.getElementById('animatecss-placeholder');
    if (placeholder && placeholder.parentNode) {
      const newLink = document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.href = url;
      placeholder.parentNode.replaceChild(newLink, placeholder);
    }
  }
}
