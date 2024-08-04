import { BrandColor, BrandIcon } from '../entities/brand.entity';

export interface ICreateBrandDTO {
  name: string;
  icon: BrandIcon;
  color: BrandColor;
  brandWebsite: string;
}
