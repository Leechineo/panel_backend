import { AppModelAdapter } from '../../../../core/adapters/app_model.adapter';
import { IProductEntity } from '../../domain/entities/product.entity';

export const ProductModel = new AppModelAdapter<IProductEntity>('products', {
  id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  images: {
    type: Array,
    default: [],
  },
  specifications: {
    type: Array,
    default: [],
  },
  category: {
    type: String,
    default: '',
  },
  brand: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'product',
  },
  stocks: {
    type: Array,
    required: true,
  },
  private: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});
