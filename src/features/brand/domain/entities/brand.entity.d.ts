export type BrandIcon = {
  default: string;
  dark: string;
};

export type BrandColor = {
  default: string;
  dark: string;
};

export interface IBrandEntityProps {
  id?: string;
  name: string;
  icon: BrandIcon;
  color: BrandColor;
  brandWebsite: string;
  createdAt?: Date;
}

export interface IBrandEntity {
  id: string;
  name: string;
  icon: BrandIcon;
  color: BrandColor;
  brandWebsite: string;
  createdAt: Date;
}
