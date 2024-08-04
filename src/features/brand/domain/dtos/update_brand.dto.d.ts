import { BrandColor, BrandIcon } from '../entities/brand.entity';

export interface IUpdateBrandDTO {
  id: string;
  name?: string;
  icon?: BrandIcon;
  color?: BrandColor;
  brandWebsite?: string;
}
