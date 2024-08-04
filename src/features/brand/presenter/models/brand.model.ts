import { AppModelAdapter } from '../../../../core/adapters/app_model.adapter';
import { IBrandEntity } from '../../domain/entities/brand.entity';

const BrandModel = new AppModelAdapter<IBrandEntity>('brands', {
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: Object,
    required: true,
  },
  color: {
    type: Object,
    required: true,
  },
  brandWebsite: {
    type: String,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

export default BrandModel;
