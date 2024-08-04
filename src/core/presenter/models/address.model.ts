import { IAddressEntity } from '../../../features/address/domain/entities/address.entity';
import { AppModelAdapter } from '../../adapters/app_model.adapter';

const AddressModel = new AppModelAdapter<IAddressEntity>('addresses', {
  id: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  complement: {
    type: String,
    default: '',
  },
  reference: {
    type: String,
    default: '',
  },
  phone: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

export default AddressModel;
