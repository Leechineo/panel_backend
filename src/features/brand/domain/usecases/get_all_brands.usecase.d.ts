import { IBrandEntity } from '../entities/brand.entity';

export interface IGetAllBrandsUseCase {
  exec(): Promise<IBrandEntity[]>;
}
