import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentsService } from '../../services/components.service';
import { Product } from '../../models/component.interface';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-components-list',
  standalone: true,
  imports: [RouterLink, MatProgressSpinnerModule],
  templateUrl: './components-list.component.html',
  styleUrl: './components-list.component.scss'
})

export class ComponentsListComponent {
  products = signal<Product[]>([]);
  showSpinner = false;

  constructor(private componentsService: ComponentsService) {

  }

  ngOnInit(): void {
    this.showSpinner = true;
    this.componentsService.getProducts().subscribe((res) => {
      this.showSpinner = false;
      this.products.set(res.slice(0, 20));
    });
    
  }
}
