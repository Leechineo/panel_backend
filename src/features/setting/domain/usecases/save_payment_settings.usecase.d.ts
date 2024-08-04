import { IPaymentSettingsEntity } from '../entities/payment_settings.entity';

export interface ISavePaymentSettingsUseCase {
  exec(
    paymentSettings: IPaymentSettingsEntity,
  ): Promise<IPaymentSettingsEntity>;
}
