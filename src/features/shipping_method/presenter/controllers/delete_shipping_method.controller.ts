import { InvalidRequestError } from '../../../../core/data/errors/invalid_request.error';
import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { IDeleteShippingMethodUseCase } from '../../domain/usecases/delete_shipping_method.usecase';

export class DeleteShippingMethodController extends AppController {
  constructor(
    private deleteShippingMethodUseCase: IDeleteShippingMethodUseCase,
  ) {
    super();
  }
  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    if (!id) {
      throw new InvalidRequestError();
    }
    const deletedShippingMethod =
      await this.deleteShippingMethodUseCase.exec(id);
    return res.send(204, deletedShippingMethod);
  }
}
