export interface Company {
  id: number;
  logoImageUrl: string;
  backgroundImageUrl: string;
  name: string;
  rating: number;
  companySize: number;
  headquarters: string;
  industry: string;
  description: string;
  competitors: string;
  founded: string;
  isBookmarked: boolean;
  companyReviews: number;
  companyDetailLogo?: string;
}