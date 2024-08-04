import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { IPaymentSettingsMapper } from '../../domain/mappers/payment_settings.mapper';
import { IGetPaymentSettingsUseCase } from '../../domain/usecases/get_payment_settings.usecase';

export class GetPaymentSettingsController extends AppController {
  constructor(
    private args: {
      getPaymentSettingsUseCase: IGetPaymentSettingsUseCase;
      paymentSettingsMapper: IPaymentSettingsMapper;
    },
  ) {
    super();
  }
  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const paymentSettings = await this.args.getPaymentSettingsUseCase.exec();
    const paymentSettingsDTO =
      this.args.paymentSettingsMapper.fromEntityToDTO(paymentSettings);
    return res.send(200, paymentSettingsDTO);
  }
}
