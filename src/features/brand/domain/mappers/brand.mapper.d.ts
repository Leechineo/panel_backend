import { IAppMapper } from '../../../../core/domain/mappers/app_mapper';
import { IBrandDTO } from '../dtos/brand.dto';
import { IBrandEntity } from '../entities/brand.entity';

export interface IBrandMapper extends IAppMapper<IBrandDTO, IBrandEntity> {}
