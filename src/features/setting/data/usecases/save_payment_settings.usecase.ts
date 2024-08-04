import { IPaymentSettingsEntity } from '../../domain/entities/payment_settings.entity';
import { ISettingRepository } from '../../domain/repositories/setting.repository';
import { ISavePaymentSettingsUseCase } from '../../domain/usecases/save_payment_settings.usecase';

export class SavePaymentSettingsUseCase implements ISavePaymentSettingsUseCase {
  constructor(private settingsRepository: ISettingRepository) {}

  async exec(
    paymentSettings: IPaymentSettingsEntity,
  ): Promise<IPaymentSettingsEntity> {
    const updatedPaymentSettings =
      await this.settingsRepository.savePaymentSettings(paymentSettings);
    return updatedPaymentSettings;
  }
}
