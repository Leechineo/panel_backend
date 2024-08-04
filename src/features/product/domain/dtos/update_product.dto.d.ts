import { ProductSpecification, ProductStock } from '../entities/product.entity';

export interface IUpdateProductDTO {
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
}
