import { IPaymentSettingsEntity } from '../entities/payment_settings.entity';

export interface ISettingRepository {
  getPaymentSettings(): Promise<IPaymentSettingsEntity>;
  savePaymentSettings(
    paymentSettings: IPaymentSettingsEntity,
  ): Promise<IPaymentSettingsEntity>;
}
