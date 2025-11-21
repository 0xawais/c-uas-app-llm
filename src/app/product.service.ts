// product.service.ts
import { Injectable } from '@angular/core';
import productsData from '../assets/data/products.json';

export interface Product {
  id: number;
  name: string;
  manufacturer: string;
  category: string;
  price: string;
  image: string;
  description: string;
  specifications: string[];
}

export interface CategoryRatings {
  transportability: number;
  easeOfUse: number;
  interoperability: number;
  detection: number;
  reliability: number;
}

export interface Review {
  id: number;
  author: string;
  milService: string;
  role: string;
  otherUASSystems?: string;
  categoryRatings: CategoryRatings;
  additionalComments: {
    transportability?: string;
    easeOfUse?: string;
    interoperability?: string;
    detection?: string;
    reliability?: string;
  };
  date: string;
}

interface ProductData {
  products: Product[];
  reviews: { [key: string]: Review[] };
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[];
  private reviews: { [productId: number]: Review[] };

  constructor() {
    const data = productsData as ProductData;
    this.products = data.products;
    // Convert string keys to number keys for reviews
    this.reviews = Object.keys(data.reviews).reduce((acc, key) => {
      acc[Number(key)] = data.reviews[key];
      return acc;
    }, {} as { [productId: number]: Review[] });
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getReviewsForProduct(productId: number): Review[] {
    return this.reviews[productId] || [];
  }

  getAverageCategoryRatings(productId: number): CategoryRatings & { overall: number, count: number } {
    const reviews = this.getReviewsForProduct(productId);
    if (reviews.length === 0) {
      return {
        transportability: 0,
        easeOfUse: 0,
        interoperability: 0,
        detection: 0,
        reliability: 0,
        overall: 0,
        count: 0
      };
    }

    const totals = reviews.reduce((acc, review) => {
      acc.transportability += review.categoryRatings.transportability;
      acc.easeOfUse += review.categoryRatings.easeOfUse;
      acc.interoperability += review.categoryRatings.interoperability;
      acc.detection += review.categoryRatings.detection;
      acc.reliability += review.categoryRatings.reliability;
      return acc;
    }, {
      transportability: 0,
      easeOfUse: 0,
      interoperability: 0,
      detection: 0,
      reliability: 0
    });

    const count = reviews.length;
    const averages = {
      transportability: Math.round((totals.transportability / count) * 10) / 10,
      easeOfUse: Math.round((totals.easeOfUse / count) * 10) / 10,
      interoperability: Math.round((totals.interoperability / count) * 10) / 10,
      detection: Math.round((totals.detection / count) * 10) / 10,
      reliability: Math.round((totals.reliability / count) * 10) / 10,
      overall: 0,
      count: count
    };

    averages.overall = Math.round(((averages.transportability + averages.easeOfUse + averages.interoperability + averages.detection + averages.reliability) / 5) * 10) / 10;

    return averages;
  }

  addReview(productId: number, review: Review): void {
    if (!this.reviews[productId]) {
      this.reviews[productId] = [];
    }
    this.reviews[productId].unshift(review);
  }

  getAllProducts(): Product[] {
    return this.products;
  }
}