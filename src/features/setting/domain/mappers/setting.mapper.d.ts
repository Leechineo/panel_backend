import { IAppMapper } from '../../../../core/domain/mappers/app_mapper';
import { ISettingDTO } from '../dto/setting.dto';
import { ISettingEntity } from '../entities/setting.entity';

export interface ISettingMapper
  extends IAppMapper<ISettingDTO, ISettingEntity> {}
