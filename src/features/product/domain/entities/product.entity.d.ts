export type ProductSpecification = {
  id: string;
  title: string;
  value: string;
};

export type ProductVariantsProperty = {
  id: string;
  name: string;
};

export type ProductVariantsOptionName = {
  id: string;
  name: string;
};

export type ProductVariantsOption = {
  id: string;
  name?: string;
  names: ProductVariantsOptionName[];
  images: string[];
  instock: number;
  price: number;
};

export type ProductVariantsType = 'unique' | 'simple' | 'compound';

export type ProductVariants = {
  title?: string;
  type: ProductVariantsType;
  properties: ProductVariantsProperty[];
  option?: ProductVariantsOption;
  options?: ProductVariantsOption[];
};

export type ProductStock = {
  stock: string;
  variants: ProductVariants;
};

export interface IProductEntity {
  id: number;
  name: string;
  description: string;
  images: string[];
  specifications: ProductSpecification[];
  category: string;
  brand: string;
  type?: string;
  stocks: ProductStock[];
  private?: boolean;
  createdAt: Date;
}
