export interface IUpdateUserDTO {
  id: string;
  admin?: boolean;
  name?: string;
  surname?: string;
  birthday?: UserEntityBirthday;
  cpf?: string;
  email?: string;
  password?: string;
  verifiedEmail?: boolean;
}
