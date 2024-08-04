import { InvalidRequestError } from '../../../../core/data/errors/invalid_request.error';
import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { IGetProductUseCase } from '../../domain/usecases/get_product.usecase';

export class GetProductController extends AppController {
  constructor(private getProductUseCase: IGetProductUseCase) {
    super();
  }

  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const id = req.params.id as string;

    if (isNaN(parseInt(id))) {
      throw new InvalidRequestError();
    }

    const product = await this.getProductUseCase.exec({
      productId: parseInt(id),
    });
    return res.send(200, product);
  }
}
