import { SettingName } from '../entities/setting.entity';

export interface ISettingDTO {
  id: string;
  name: SettingName;
  value: string;
  createdAt: string;
}
