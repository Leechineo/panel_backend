import { ICreateBrandDTO } from '../dtos/create_brand.dto';
import { IUpdateBrandDTO } from '../dtos/update_brand.dto';
import { IBrandEntity } from '../entities/brand.entity';

export interface IBrandRepository {
  getBrand(brandId: string): Promise<IBrandEntity>;
  getAllBrands(): Promise<IBrandEntity[]>;
  updateBrand(brandData: IUpdateBrandDTO): Promise<IBrandEntity>;
  createBrand(brandData: ICreateBrandDTO): Promise<IBrandEntity>;
  deleteBrand(brandId: string): Promise<IBrandEntity>;
}
