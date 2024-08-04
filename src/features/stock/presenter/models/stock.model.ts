import { AppModelAdapter } from '../../../../core/adapters/app_model.adapter';
import { IStockEntity } from '../../domain/entities/stock.entity';

const StockModel = new AppModelAdapter<IStockEntity>('stocks', {
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    default: 'br',
  },
  shippingMethod: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
});

export default StockModel;
