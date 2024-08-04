export type UserEntityBirthday = {
  day: string;
  month: string;
  year: string;
};

export interface IUserEntity {
  id: string;
  admin?: boolean;
  name: string;
  surname: string;
  birthday: UserEntityBirthday;
  cpf: string;
  email: string;
  password?: string;
  verifiedEmail: boolean;
  createdAt: Date;
}
