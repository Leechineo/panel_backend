import { ICreateBrandDTO } from '../../domain/dtos/create_brand.dto';
import { IBrandEntity } from '../../domain/entities/brand.entity';
import { IBrandRepository } from '../../domain/repositories/brand.repository';
import { ICreateBrandUseCase } from '../../domain/usecases/create_brand.usecase';

export class CreateBrandUseCase implements ICreateBrandUseCase {
  constructor(private brandRepository: IBrandRepository) {}
  async exec(brandData: ICreateBrandDTO): Promise<IBrandEntity> {
    const createdBrand = await this.brandRepository.createBrand(brandData);
    return createdBrand;
  }
}
