import { IPaymentSettingsEntity } from '../entities/payment_settings.entity';

export interface IGetPaymentSettingsUseCase {
  exec(): Promise<IPaymentSettingsEntity>;
}
