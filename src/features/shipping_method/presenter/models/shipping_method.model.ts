import { AppModelAdapter } from '../../../../core/adapters/app_model.adapter';
import { IShippingMethodEntity } from '../../domain/entities/shipping_method.entity';

const ShippingMethodModel = new AppModelAdapter<IShippingMethodEntity>(
  'shippingmethods',
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      required: true,
      type: String,
    },
    defaultMapping: {
      type: Object,
      required: true,
    },
    mappings: {
      type: Array,
    },
    products: {
      type: Array,
    },
    createdAt: {
      type: Date,
      required: true,
    },
  },
);

export default ShippingMethodModel;
