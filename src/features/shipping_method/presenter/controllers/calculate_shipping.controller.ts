import { InvalidRequestError } from '../../../../core/data/errors/invalid_request.error';
import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { ICalculateShippingUseCase } from '../../domain/usecases/calculate_shipping.usecase';

export class CalculateShippingController extends AppController {
  constructor(
    private args: {
      calculateShippingUseCase: ICalculateShippingUseCase;
    },
  ) {
    super();
  }
  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const { addressId, shippingMethodId, productId } = req.query;

    if (
      typeof addressId != 'string' ||
      typeof shippingMethodId != 'string' ||
      (typeof productId != 'undefined' && isNaN(Number(productId)))
    ) {
      throw new InvalidRequestError();
    }

    const mapping = await this.args.calculateShippingUseCase.exec({
      addressId,
      shippingMethodId,
      productId: Number(productId),
    });
    return res.send(200, mapping);
  }
}
