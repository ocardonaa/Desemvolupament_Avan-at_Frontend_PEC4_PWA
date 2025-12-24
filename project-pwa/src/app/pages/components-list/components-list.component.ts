import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComponentsService } from '../../services/components.service';
import { Product } from '../../models/component.interface';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-components-list',
  standalone: true,
  imports: [RouterLink, MatProgressSpinnerModule, MatTableModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './components-list.component.html',
  styleUrl: './components-list.component.scss'
})

export class ComponentsListComponent {
  products = signal<Product[]>([]);
  showSpinner = false;
  cardsView = false;
  tableView = true;
  columnsToDisplay: string[] = ['id', 'title'];
  dataSource = this.products;

  constructor(private componentsService: ComponentsService) {

  }

  ngOnInit(): void {
    this.showSpinner = true;
    this.componentsService.getProducts().subscribe((res) => {
      this.showSpinner = false;
      this.products.set(res.slice(0, 20));
      this.dataSource = this.products;
    });
  }

  changetoTable(): void {
    this.cardsView = false;
    this.tableView = true;
  }

  changetoCards(): void {
    this.cardsView = true;
    this.tableView = false;
  }
}
