import { BrandColor, BrandIcon } from '../entities/brand.entity';

export interface IBrandDTO {
  id: string;
  name: string;
  icon: BrandIcon;
  color: BrandColor;
  brandWebsite: string;
  createdAt: string;
}
