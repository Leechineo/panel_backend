import { InvalidRequestError } from '../../../../core/data/errors/invalid_request.error';
import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { StockEntity } from '../../data/entities/stock.entity';
import { IUpdateStockControllerBody } from '../../domain/controllers/update_stock.controller';
import { IUpdateStockUseCase } from '../../domain/usecases/update_stock.usecase';

export class UpdateStockController extends AppController {
  constructor(private updateStockUseCase: IUpdateStockUseCase) {
    super();
  }
  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    const stockJson = req.body as IUpdateStockControllerBody;
    if (!id || !id.startsWith('stock-')) {
      throw new InvalidRequestError();
    }
    const updatedStock = await this.updateStockUseCase.exec({
      id: id as `stock-${string}`,
      country: StockEntity.countryFromString(stockJson.country),
      currency: StockEntity.currencyFromString(stockJson.currency),
      name: stockJson.name,
      shippingMethod: stockJson.shippingMethod,
    });
    return res.send(200, updatedStock);
  }
}
