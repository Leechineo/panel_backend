import { ICreateBrandDTO } from '../dtos/create_brand.dto';
import { IBrandEntity } from '../entities/brand.entity';

export interface ICreateBrandUseCase {
  exec(brandData: ICreateBrandDTO): Promise<IBrandEntity>;
}
