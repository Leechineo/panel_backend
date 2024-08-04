import { PaymentSettingsValue } from '../entities/payment_settings.entity';

export interface IPaymentSettingsDTO {
  id: string;
  name: string;
  value: PaymentSettingsValue;
  createdAt: string;
}
