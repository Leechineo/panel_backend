import { AppModelAdapter } from '../../../../core/adapters/app_model.adapter';
import { ISettingEntity } from '../../domain/entities/setting.entity';

export const SettingModel = new AppModelAdapter<ISettingEntity>('settings', {
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});
