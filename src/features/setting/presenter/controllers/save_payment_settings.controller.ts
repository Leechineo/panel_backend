import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { IPaymentSettingsDTO } from '../../domain/dto/payment_settings.dto';
import { IPaymentSettingsMapper } from '../../domain/mappers/payment_settings.mapper';
import { ISavePaymentSettingsUseCase } from '../../domain/usecases/save_payment_settings.usecase';

export class SavePaymentSettingsController extends AppController {
  constructor(
    private args: {
      savePaymentSettingsUseCase: ISavePaymentSettingsUseCase;
      paymentSettingsMapper: IPaymentSettingsMapper;
    },
  ) {
    super();
  }
  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const paymentSettingsDTO = req.body as IPaymentSettingsDTO;
    const paymentSettings =
      this.args.paymentSettingsMapper.fromDTOToEntity(paymentSettingsDTO);
    const updatedPaymentSettings =
      await this.args.savePaymentSettingsUseCase.exec(paymentSettings);
    const updatedPaymentSettingsDTO =
      this.args.paymentSettingsMapper.fromEntityToDTO(updatedPaymentSettings);
    return res.send(200, updatedPaymentSettingsDTO);
  }
}
