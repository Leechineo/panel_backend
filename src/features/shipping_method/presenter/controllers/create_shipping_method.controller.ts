import { InvalidRequestError } from '../../../../core/data/errors/invalid_request.error';
import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { ICreateShippingMethodDTO } from '../../domain/dtos/create_shipping_method.dto';
import { ICreateShippingMethodUseCase } from '../../domain/usecases/create_shipping_method.usecase';

export class CreateShippingMethodController extends AppController {
  constructor(
    private createShippingMethodUseCase: ICreateShippingMethodUseCase,
  ) {
    super();
  }
  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const { name, defaultMapping, products, mappings } = req.body;

    if (!name || !defaultMapping) {
      throw new InvalidRequestError();
    }
    const createShippingMethodDTO: ICreateShippingMethodDTO = {
      name: name,
      defaultMapping: defaultMapping,
      products: products,
      mappings: mappings,
    };
    const createdShippingMethod = await this.createShippingMethodUseCase.exec(
      createShippingMethodDTO,
    );
    return res.send(201, createdShippingMethod);
  }
}
