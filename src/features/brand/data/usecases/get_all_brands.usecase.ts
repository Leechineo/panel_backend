import { IBrandEntity } from '../../domain/entities/brand.entity';
import { IBrandRepository } from '../../domain/repositories/brand.repository';
import { IGetAllBrandsUseCase } from '../../domain/usecases/get_all_brands.usecase';

export class GetAllBrandsUseCase implements IGetAllBrandsUseCase {
  constructor(private brandRepository: IBrandRepository) {}
  async exec(): Promise<IBrandEntity[]> {
    const brands = await this.brandRepository.getAllBrands();
    return brands;
  }
}
