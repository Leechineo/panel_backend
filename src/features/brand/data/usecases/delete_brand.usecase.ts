import { IBrandEntity } from '../../domain/entities/brand.entity';
import { IBrandRepository } from '../../domain/repositories/brand.repository';
import { IDeleteBrandUseCase } from '../../domain/usecases/delete_brand.usecase';

export class DeleteBrandUseCase implements IDeleteBrandUseCase {
  constructor(private brandRepository: IBrandRepository) {}
  async exec(brandId: string): Promise<IBrandEntity> {
    const deletedBrand = await this.brandRepository.deleteBrand(brandId);
    return deletedBrand;
  }
}
