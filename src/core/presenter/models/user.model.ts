import {
  IUserEntity,
  UserEntityBirthday,
} from '../../../features/user/domain/entities/user.entity';
import { AppModelAdapter } from '../../adapters/app_model.adapter';

export const UserModel = new AppModelAdapter<IUserEntity>('users', {
  id: {
    type: String,
    required: true,
    unique: true,
  },
  admin: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  birthday: {
    type: Object as unknown as UserEntityBirthday,
    required: true,
  },
  cpf: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  verifiedEmail: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});
