import { IUpdateBrandDTO } from '../../domain/dtos/update_brand.dto';
import { IBrandEntity } from '../../domain/entities/brand.entity';
import { IBrandRepository } from '../../domain/repositories/brand.repository';
import { IUpdateBrandUseCase } from '../../domain/usecases/update_brand.usecase';

export class UpdateBrandUseCase implements IUpdateBrandUseCase {
  constructor(private brandRepository: IBrandRepository) {}
  async exec(brandData: IUpdateBrandDTO): Promise<IBrandEntity> {
    const updatedBrand = await this.brandRepository.updateBrand(brandData);
    return updatedBrand;
  }
}
