import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { IGetAllShippingMethodsUseCase } from '../../domain/usecases/get_all_shipping_methods.usecase';

export class GetAllShippingMethodsController extends AppController {
  constructor(
    private getAllShippingMethodsUseCase: IGetAllShippingMethodsUseCase,
  ) {
    super();
  }
  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const shippingMethods = await this.getAllShippingMethodsUseCase.exec();
    return res.send(200, shippingMethods);
  }
}
