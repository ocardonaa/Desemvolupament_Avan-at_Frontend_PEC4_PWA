import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentsService } from '../../services/components.service';
import { Meme } from '../../models/component.interface';

@Component({
  selector: 'app-components-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './components-list.component.html',
  styleUrl: './components-list.component.scss'
})

export class ComponentsListComponent {
  memes = signal<Meme[]>([]);

  constructor(private componentsService: ComponentsService) {

  }

  ngOnInit(): void {
    this.componentsService.getMemes().subscribe((res) => {
      this.memes.set(res.data.memes.slice(0, 10));
    });
  }
}
