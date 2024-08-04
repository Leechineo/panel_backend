import { IAppMapper } from '../../../../core/domain/mappers/app_mapper';
import { IPaymentSettingsDTO } from '../dto/payment_settings.dto';
import { IPaymentSettingsEntity } from '../entities/payment_settings.entity';

export interface IPaymentSettingsMapper
  extends IAppMapper<IPaymentSettingsDTO, IPaymentSettingsEntity> {}
