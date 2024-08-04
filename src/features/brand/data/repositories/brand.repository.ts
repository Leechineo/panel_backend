import { IAppModel } from '../../../../core/domain/adapters/app_model.adapter';
import { ICreateBrandDTO } from '../../domain/dtos/create_brand.dto';
import { IUpdateBrandDTO } from '../../domain/dtos/update_brand.dto';
import { IBrandEntity } from '../../domain/entities/brand.entity';
import { IBrandMapper } from '../../domain/mappers/brand.mapper';
import { IBrandRepository } from '../../domain/repositories/brand.repository';
import { BrandNotFoundError } from '../errors/brand_not_found.error';

import crypto from 'crypto';

export class BrandRepository implements IBrandRepository {
  constructor(
    private brandModel: IAppModel<IBrandEntity>,
    private brandMapper: IBrandMapper,
  ) {}

  async getBrand(brandId: string): Promise<IBrandEntity> {
    const brand = await this.brandModel.findById(brandId);
    if (brand) {
      return this.brandMapper.fromJsonDataToEntity(brand);
    }
    throw new BrandNotFoundError();
  }
  async getAllBrands(): Promise<IBrandEntity[]> {
    const brands = await this.brandModel.find();
    return brands.map((brand) => this.brandMapper.fromJsonDataToEntity(brand));
  }
  async updateBrand(brandData: IUpdateBrandDTO): Promise<IBrandEntity> {
    const updatedBrand = await this.brandModel.findByIdAndUpdate(
      brandData.id,
      brandData,
    );
    if (updatedBrand) {
      return this.brandMapper.fromJsonDataToEntity(updatedBrand);
    }
    throw new BrandNotFoundError();
  }
  async createBrand(brandData: ICreateBrandDTO): Promise<IBrandEntity> {
    const id = `brand-${crypto.randomUUID()}`;
    const createdBrand = await this.brandModel.create({
      id,
      ...brandData,
      createdAt: new Date(),
    });
    return createdBrand;
  }
  async deleteBrand(brandId: string): Promise<IBrandEntity> {
    const deletedBrand = await this.brandModel.findByIdAndDelete(brandId);
    if (deletedBrand) {
      return this.brandMapper.fromJsonDataToEntity(deletedBrand);
    }
    throw new BrandNotFoundError();
  }
}
