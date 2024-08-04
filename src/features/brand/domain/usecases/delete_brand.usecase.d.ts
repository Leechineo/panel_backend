import { IBrandEntity } from '../entities/brand.entity';

export interface IDeleteBrandUseCase {
  exec(brandId: string): Promise<IBrandEntity>;
}
