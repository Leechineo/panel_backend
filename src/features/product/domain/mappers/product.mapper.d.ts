import { IAppMapper } from '../../../../core/domain/mappers/app_mapper';
import { IProductDTO } from '../dtos/product_dto';
import { IProductEntity } from '../entities/product.entity';

export interface IProductMapper
  extends IAppMapper<IProductDTO, IProductEntity> {}
