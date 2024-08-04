import { InvalidRequestError } from '../../../../core/data/errors/invalid_request.error';
import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { ICreateStockControllerBody } from '../../domain/controllers/create_stock.controller';
import { ICreateStockUseCase } from '../../domain/usecases/create_stock.usecase';

export class CreateStockController extends AppController {
  constructor(private createStockUseCase: ICreateStockUseCase) {
    super();
  }
  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const stockJson = req.body as ICreateStockControllerBody;
    if (
      !stockJson.name ||
      !stockJson.shippingMethod ||
      !stockJson.currency ||
      !stockJson.country
    ) {
      throw new InvalidRequestError();
    }
    const stock = await this.createStockUseCase.exec(stockJson);
    return res.send(201, stock);
  }
}
