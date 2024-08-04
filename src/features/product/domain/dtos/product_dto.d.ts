import { ProductSpecification, ProductStock } from '../entities/product.entity';

export interface IProductDTO {
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
  createdAt: string;
}
