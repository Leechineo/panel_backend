export type SettingName = 'payment_settings';

export interface ISettingEntity<T = string> {
  id: string;
  name: SettingName;
  value: T;
  createdAt: Date;
}
