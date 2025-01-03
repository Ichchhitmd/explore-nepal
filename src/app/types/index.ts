export interface Review {
    id: string;
    user: string;
    rating: number;
    comment: string;
    date: string;
  }
  
  export interface Destination {
    id: number;
    name: string;
    region: string;
    type: string;
    rating: number;
    description: string;
    images: string[];
    activities: string[];
    popularity: number;
    userReviews: Review[];
    topDestination: boolean;
  }