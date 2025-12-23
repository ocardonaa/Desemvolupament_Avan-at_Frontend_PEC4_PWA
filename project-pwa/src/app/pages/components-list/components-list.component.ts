import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentsService } from '../../services/components.service';
import { Product } from '../../models/component.interface';

@Component({
  selector: 'app-components-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './components-list.component.html',
  styleUrl: './components-list.component.scss'
})

export class ComponentsListComponent {
  products = signal<Product[]>([]);

  constructor(private componentsService: ComponentsService) {

  }

  ngOnInit(): void {
    this.componentsService.getProducts().subscribe((res) => {
      this.products.set(res.slice(0, 20));
    });
  }
}
