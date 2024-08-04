import { InvalidRequestError } from '../../../../core/data/errors/invalid_request.error';
import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { IGetShippingMethodByIdUseCase } from '../../domain/usecases/get_shipping_method_by_id.usecase';

export class GetShippingMethodByIdController extends AppController {
  constructor(
    private getShippingMethodByIdUseCase: IGetShippingMethodByIdUseCase,
  ) {
    super();
  }

  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    if (!id) {
      throw new InvalidRequestError();
    }
    const shippingMethod = await this.getShippingMethodByIdUseCase.exec(id);
    return res.send(200, shippingMethod);
  }
}
