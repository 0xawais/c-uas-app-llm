// product.service.ts
import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Roadrunner-M',
      manufacturer: 'Anduril Industries',
      category: 'Air Defense Interceptor',
      price: 'Contact for Pricing',
      image: 'https://cdn.sanity.io/images/z5s3oquj/production/cb086dde298ee0705a8a4afad32741324e8997cf-1075x1433.jpg?auto=format&fit=max&w=640&q=90',
      description: 'Revolutionary recoverable ground-based air defense interceptor. Twin-jet powered VTOL autonomous air vehicle capable of high subsonic speeds and high-G maneuvers. Features a high-explosive warhead for destroying aerial threats including UAS, cruise missiles, and low-flying aircraft. Uniquely reusable - can return to base, land vertically, refuel, and relaunch in minutes if not deployed against a target.',
      specifications: [
        'VTOL (Vertical Take-Off and Landing) capability',
        'Twin turbojet engines with thrust vectoring',
        'High subsonic speed capability',
        'Approximately 6 feet (1.5m) in length',
        'High-G force maneuvering',
        'Autonomous target tracking and interception',
        'Lands on four flip-down outriggers',
        'Quick refuel and relaunch (minutes, not hours)',
        'Integrated with Lattice AI command and control',
        'Compatible with existing air defense architectures'
      ]
    },
    {
      id: 2,
      name: 'DroneBuster',
      manufacturer: 'DZYNE Technologies',
      category: 'Counter-UAS System',
      price: 'Contact for Pricing',
      image: 'https://dzyne.com/wp-content/uploads/2025/10/9.2025-CMG-Dzyne-WR-105-1536x1024.jpg',
      description: 'Combat-proven, handheld Counter-UAS system with more than 2,500 units deployed worldwide. Designed for soldier-level defense, it enables operators to detect, identify, and defeat hostile drones in real time. As the only American-made handheld C-sUAS with optional PNT Attack (GNSS spoofing), DroneBuster delivers unmatched tactical flexibility for U.S. and allied forces.',
      specifications: [
        'Handheld, portable design for individual operators',
        'Detection range up to 7 km across 400 MHz–6 GHz',
        'AI/ML-powered drone identification',
        'Continuously updated drone library',
        'PNT Attack (GNSS spoofing) capability',
        'Remote ID & Aeroscope integration',
        'Haptic, aural, and visual alerts',
        'Built-in LCD display',
        'Omnidirectional antennas',
        '2,500+ units deployed globally'
      ]
    },
    {
      id: 3,
      name: 'Beast+',
      manufacturer: 'CACI International',
      category: 'Multi-Channel SIGINT Receiver',
      price: 'Contact for Pricing',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs6q3tqBaE1JmdZYa1453TR6_rqkFla2hNHQ&s',
      description: 'Dismount multi-channel receiver that builds upon the battle-proven Beast platform with the addition of a third receive channel and transmit capabilities. Supports detection, direction finding (DF), and electronic attack of adversary signals. This multi-function device performs survey, drive test, and surveillance of multiple push-to-talk and cellular protocols.',
      specifications: [
        '3 simultaneous receive channels (500 kHz – 6 GHz)',
        '16 simultaneous demodulators',
        '80 MHz instantaneous bandwidth per channel',
        'Electronic attack (EA) capabilities',
        'Dedicated transmit port for jamming',
        'Rugged design (MIL-STD-810G)',
        '~8 hour battery life',
        'Weight: <4.0 lbs with battery',
        'ATAK integration via Reaper plug-in',
        'Compatible with PRC-148/152 and 2590/5590 batteries'
      ]
    }
  ];

  private reviews: { [productId: number]: Review[] } = {
    1: [
      {
        id: 1,
        author: 'Sarah Johnson',
        milService: 'Army',
        role: 'Air Defense Artillery Officer',
        categoryRatings: {
          transportability: 4,
          easeOfUse: 5,
          interoperability: 5,
          detection: 5,
          reliability: 5
        },
        additionalComments: {
          easeOfUse: 'Extremely intuitive interface and autonomous operations make deployment straightforward.',
          reliability: 'Flawless performance in field tests. The reusability feature is a game-changer.'
        },
        date: '2024-10-15'
      },
      {
        id: 2,
        author: 'Mike Chen',
        milService: 'Air Force',
        role: 'Weapons System Officer',
        categoryRatings: {
          transportability: 4,
          easeOfUse: 4,
          interoperability: 5,
          detection: 5,
          reliability: 4
        },
        additionalComments: {
          interoperability: 'Integrates seamlessly with existing Lattice AI systems.',
          transportability: 'Compact design but requires specialized transport due to jet fuel requirements.'
        },
        date: '2024-10-10'
      }
    ],
    2: [
      {
        id: 1,
        author: 'John Martinez',
        milService: 'Marines',
        role: 'Infantry Officer',
        categoryRatings: {
          transportability: 5,
          easeOfUse: 5,
          interoperability: 4,
          detection: 5,
          reliability: 5
        },
        additionalComments: {
          transportability: 'Lightweight and portable - perfect for dismounted operations.',
          easeOfUse: 'Minimal training required. Soldiers were effective with it immediately.'
        },
        date: '2024-11-01'
      },
      {
        id: 2,
        author: 'Emily Rodriguez',
        milService: 'Army',
        role: 'Electronic Warfare Specialist',
        categoryRatings: {
          transportability: 5,
          easeOfUse: 5,
          interoperability: 5,
          detection: 5,
          reliability: 4
        },
        additionalComments: {
          detection: 'Detection range is impressive. AI identification rarely misses.',
          reliability: 'Battery life could be extended for longer missions.'
        },
        date: '2024-10-28'
      },
      {
        id: 3,
        author: 'David Thompson',
        milService: 'Navy',
        role: 'Security Officer',
        categoryRatings: {
          transportability: 5,
          easeOfUse: 4,
          interoperability: 4,
          detection: 4,
          reliability: 4
        },
        additionalComments: {
          easeOfUse: 'Interface is intuitive but requires practice with PNT spoofing features.',
          interoperability: 'Works well with our systems but integration could be smoother.'
        },
        date: '2024-10-20'
      }
    ],
    3: [
      {
        id: 1,
        author: 'Robert Williams',
        milService: 'Army',
        role: 'Signal Intelligence Analyst',
        categoryRatings: {
          transportability: 4,
          easeOfUse: 5,
          interoperability: 5,
          detection: 5,
          reliability: 5
        },
        additionalComments: {
          easeOfUse: 'Three channels make operations significantly more effective.',
          interoperability: 'ATAK integration is seamless and enhances situational awareness.'
        },
        date: '2024-11-05'
      },
      {
        id: 2,
        author: 'Lisa Anderson',
        milService: 'Air Force',
        role: 'Communications Officer',
        categoryRatings: {
          transportability: 4,
          easeOfUse: 5,
          interoperability: 5,
          detection: 5,
          reliability: 5
        },
        additionalComments: {
          reliability: 'Rugged build has held up perfectly in harsh desert conditions.',
          transportability: 'Compact for its capabilities but still requires proper carrying case.'
        },
        date: '2024-10-25'
      },
      {
        id: 3,
        author: 'James Brown',
        milService: 'Marines',
        role: 'Communications Chief',
        categoryRatings: {
          transportability: 4,
          easeOfUse: 4,
          interoperability: 5,
          detection: 4,
          reliability: 4
        },
        additionalComments: {
          easeOfUse: 'Learning curve is moderate but worth the investment.',
          detection: 'Frequency coverage is impressive. EA capabilities are powerful.'
        },
        date: '2024-10-18'
      }
    ]
  };

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