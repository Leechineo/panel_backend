import crypto from 'crypto';

import { IAppModel } from '../../../../core/domain/adapters/app_model.adapter';
import { IPaymentSettingsEntity } from '../../domain/entities/payment_settings.entity';
import { ISettingEntity } from '../../domain/entities/setting.entity';
import { IPaymentSettingsMapper } from '../../domain/mappers/payment_settings.mapper';
import { ISettingRepository } from '../../domain/repositories/setting.repository';
import { ISettingMapper } from '../../domain/mappers/setting.mapper';

export class SettingRepository implements ISettingRepository {
  constructor(
    private args: {
      settingModel: IAppModel<ISettingEntity>;
      settingMapper: ISettingMapper;
      paymentSettingsMapper: IPaymentSettingsMapper;
    },
  ) {}

  async savePaymentSettings(
    paymentSettings: IPaymentSettingsEntity,
  ): Promise<IPaymentSettingsEntity> {
    const currentPaymentSettingsJson = await this.args.settingModel.findOne({
      name: 'payment_settings',
    });
    if (!currentPaymentSettingsJson) {
      const updatedSettings = await this.args.settingModel.create({
        id: crypto.randomUUID(),
        name: 'payment_settings',
        value: JSON.stringify(paymentSettings.value),
        createdAt: new Date(),
      });
      return this.args.paymentSettingsMapper.fromJsonDataToEntity(
        updatedSettings,
      );
    }
    const currentPaymentSettings = this.args.settingMapper.fromJsonDataToEntity(
      currentPaymentSettingsJson,
    );
    const updatedSettings = await this.args.settingModel.findOneAndUpdate(
      {
        name: 'payment_settings',
      },
      {
        id: currentPaymentSettings.id,
        name: currentPaymentSettings.name,
        value: JSON.stringify(paymentSettings.value),
        createdAt: currentPaymentSettings.createdAt,
      },
    );
    if (updatedSettings) {
      return this.args.paymentSettingsMapper.fromJsonDataToEntity(
        updatedSettings,
      );
    }
    return paymentSettings;
  }

  async getPaymentSettings(): Promise<IPaymentSettingsEntity> {
    const paymentSettingsJson = await this.args.settingModel.findOne({
      name: 'payment_settings',
    });
    if (!paymentSettingsJson) {
      return {
        id: 'not_configured',
        name: 'payment_settings',
        value: {
          installments: {
            enabled: false,
            installments: [],
          },
          paymentMethods: [
            {
              name: 'pix',
              enabled: false,
              discount: 0,
            },
            {
              name: 'slip',
              enabled: false,
              discount: 0,
            },
            {
              name: 'credit_card',
              enabled: false,
              discount: 0,
            },
          ],
        },
        createdAt: new Date(),
      };
    }
    return this.args.paymentSettingsMapper.fromJsonDataToEntity(
      paymentSettingsJson,
    );
  }
}
