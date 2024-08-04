import { IUpdateBrandDTO } from '../dtos/update_brand.dto';
import { IBrandEntity } from '../entities/brand.entity';

export interface IUpdateBrandUseCase {
  exec(brandData: IUpdateBrandDTO): Promise<IBrandEntity>;
}
