import { InvalidRequestError } from '../../../../core/data/errors/invalid_request.error';
import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { IUpdateShippingShippingMethodDTO } from '../../domain/dtos/update_shipping_method.dto';
import { IUpdateShippingMethodUseCase } from '../../domain/usecases/update_shipping_method.usecase';

export class UpdateShippingMethodController extends AppController {
  constructor(
    private updateShippingMethodUseCase: IUpdateShippingMethodUseCase,
  ) {
    super();
  }
  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { defaultMapping, mappings, products, name } = req.body;
    if (!id) {
      throw new InvalidRequestError();
    }
    const updateShippingMethodDTO: IUpdateShippingShippingMethodDTO = {
      id: id,
      name: name,
      defaultMapping: defaultMapping,
      mappings: mappings,
      products: products,
    };
    const updatedShippingMethod = await this.updateShippingMethodUseCase.exec(
      updateShippingMethodDTO,
    );
    return res.send(200, updatedShippingMethod);
  }
}
