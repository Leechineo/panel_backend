import { IBrandEntity } from '../entities/brand.entity';

export interface IGetBrandUseCase {
  exec(brandId: string): Promise<IBrandEntity>;
}
