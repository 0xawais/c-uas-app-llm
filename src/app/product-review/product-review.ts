// product-review.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product, CategoryRatings } from '../product.service';

@Component({
  selector: 'app-product-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-review.html',
  styleUrls: ['./product-review.scss']
})
export class ProductReviewComponent implements OnInit {
  product: Product | undefined;
  categoryRatings: CategoryRatings & { overall: number, count: number } = {
    transportability: 0,
    easeOfUse: 0,
    interoperability: 0,
    detection: 0,
    reliability: 0,
    overall: 0,
    count: 0
  };
  Math = Math;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = +params['id'];
      this.product = this.productService.getProductById(productId);
      
      if (!this.product) {
        this.router.navigate(['/']);
        return;
      }
      
      this.categoryRatings = this.productService.getAverageCategoryRatings(productId);
    });
  }
}