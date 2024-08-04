import { InvalidRequestError } from '../../../../core/data/errors/invalid_request.error';
import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { IDeleteStockUseCase } from '../../domain/usecases/delete_stock.usecase';

export class DeleteStockController extends AppController {
  constructor(private deleteStockUseCase: IDeleteStockUseCase) {
    super();
  }
  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    if (!id || !id.startsWith('stock-')) {
      throw new InvalidRequestError();
    }
    const deletedStock = await this.deleteStockUseCase.exec(
      id as `stock-${string}`,
    );
    return res.send(200, deletedStock);
  }
}
