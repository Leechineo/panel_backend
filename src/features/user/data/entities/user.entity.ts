/* eslint-disable @typescript-eslint/no-explicit-any */
import crypto from 'crypto';

import {
  IUserEntity,
  UserEntityBirthday,
} from '../../domain/entities/user.entity';

export class UserEntity implements IUserEntity {
  public id: string;
  public admin: boolean;
  public name: string;
  public surname: string;
  public birthday: UserEntityBirthday;
  public cpf: string;
  public email: string;
  public password: string | undefined;
  public verifiedEmail: boolean;
  public createdAt: Date;
  constructor(props: IUserEntity) {
    this.id = props.id ?? crypto.randomUUID();
    this.admin = props.admin ?? false;
    this.name = props.name;
    this.surname = props.surname;
    this.birthday = props.birthday;
    this.cpf = props.cpf;
    this.email = props.email;
    this.password = props.password;
    this.verifiedEmail = props.verifiedEmail;
    this.createdAt = props.createdAt;
  }

  updatePassword(value: string) {
    this.password = value;
  }

  static fromJson(json: Record<string, any>) {
    return new UserEntity({
      id: json['id'],
      admin: json['admin'],
      name: json['name'],
      surname: json['surname'],
      birthday: json['birthday'],
      cpf: json['cpf'],
      email: json['email'],
      password: json['password'],
      verifiedEmail: json['verifiedEmail'],
      createdAt: new Date(json['createdAt']),
    });
  }
}
