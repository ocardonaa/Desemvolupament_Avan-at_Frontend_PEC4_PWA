import { Component, signal } from '@angular/core';
import { ComponentsService } from '../../services/components.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Product } from '../../models/component.interface';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-components-detail',
  standalone: true,
  imports: [RouterLink, MatProgressSpinnerModule, MatButtonModule, MatExpansionModule],
  templateUrl: './components-detail.component.html',
  styleUrl: './components-detail.component.scss'
})
export class ComponentsDetailComponent {

  productDetail = signal<Product>({
    id: '',
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 0,
      count: 0
    }
  });

  dataSource = this.productDetail;

  readonly panelOpenState = signal(false);

  constructor(private componentsService: ComponentsService, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');

    if (identifier) {
      this.componentsService.getProductById(identifier).subscribe((prod) => {
        if (!prod) {
          this.router.navigateByUrl('/');
        }
        this.productDetail.set(prod);
        this.dataSource = this.productDetail;
      })
    }
  }
}
