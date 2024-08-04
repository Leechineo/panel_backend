import { IPaymentSettingsEntity } from '../../domain/entities/payment_settings.entity';
import { ISettingRepository } from '../../domain/repositories/setting.repository';
import { IGetPaymentSettingsUseCase } from '../../domain/usecases/get_payment_settings.usecase';

export class GetPaymentSettingsUseCase implements IGetPaymentSettingsUseCase {
  constructor(private args: { settingRepository: ISettingRepository }) {}
  async exec(): Promise<IPaymentSettingsEntity> {
    const paymentSettings =
      await this.args.settingRepository.getPaymentSettings();
    return paymentSettings;
  }
}
