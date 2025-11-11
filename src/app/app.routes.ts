import { Routes } from '@angular/router';
import { ProductReviewComponent } from './product-review/product-review';
import { ReviewSystem } from './review-system/review-system';

export const routes: Routes = [
    { 
        path: 'product-review', 
        component: ProductReviewComponent
    },
    { 
        path: 'review-system', 
        component: ReviewSystem
    }
];
