import { InvalidRequestError } from '../../../../core/data/errors/invalid_request.error';
import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { IGetStockUseCase } from '../../domain/usecases/get_stock.usecase';

export class GetStockController extends AppController {
  constructor(private getStockUseCase: IGetStockUseCase) {
    super();
  }
  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    if (!id || !id.startsWith('stock-')) {
      throw new InvalidRequestError();
    }
    const stock = await this.getStockUseCase.exec(id as `stock-${string}`);
    return res.send(200, stock);
  }
}
