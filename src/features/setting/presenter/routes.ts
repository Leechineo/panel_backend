import { RouterAdapter } from '../../../core/adapters/router.adapter';
import { authMiddleware } from '../../../core/presenter/middlewares/auth.middleware';
import { PaymentSettingsMapper } from '../data/mappers/payment_settings.mapper';
import { SettingMapper } from '../data/mappers/setting.mapper';
import { SettingRepository } from '../data/repository/setting.repository';
import { GetPaymentSettingsUseCase } from '../data/usecases/get_payment_settings.usecase';
import { SavePaymentSettingsUseCase } from '../data/usecases/save_payment_settings.usecase';
import { GetPaymentSettingsController } from './controllers/get_payment_settings.controller';
import { SavePaymentSettingsController } from './controllers/save_payment_settings.controller';
import { SettingModel } from './models/setting.model';

const settingRoutes = new RouterAdapter();

const paymentSettingsMapper = new PaymentSettingsMapper();
const settingMapper = new SettingMapper();
const settingRepository = new SettingRepository({
  settingModel: SettingModel,
  paymentSettingsMapper,
  settingMapper,
});

settingRoutes.get('/payment', authMiddleware(), (req, res) => {
  const getPaymentSettingsUseCase = new GetPaymentSettingsUseCase({
    settingRepository,
  });
  const getPaymentSettingsController = new GetPaymentSettingsController({
    getPaymentSettingsUseCase: getPaymentSettingsUseCase,
    paymentSettingsMapper: paymentSettingsMapper,
  });
  return getPaymentSettingsController.handleRequest(req, res);
});

settingRoutes.patch('/payment', authMiddleware(), (req, res) => {
  const savePaymentSettingsUseCase = new SavePaymentSettingsUseCase(
    settingRepository,
  );
  const savePaymentSettingsController = new SavePaymentSettingsController({
    savePaymentSettingsUseCase,
    paymentSettingsMapper,
  });
  savePaymentSettingsController.handleRequest(req, res);
});

export default settingRoutes;
