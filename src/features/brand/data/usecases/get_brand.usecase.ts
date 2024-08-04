import { IBrandEntity } from '../../domain/entities/brand.entity';
import { IBrandRepository } from '../../domain/repositories/brand.repository';
import { IGetBrandUseCase } from '../../domain/usecases/get_brand.usecase';

export class GetBrandUseCase implements IGetBrandUseCase {
  constructor(private brandRepository: IBrandRepository) {}
  async exec(brandId: string): Promise<IBrandEntity> {
    const brand = await this.brandRepository.getBrand(brandId);
    return brand;
  }
}
