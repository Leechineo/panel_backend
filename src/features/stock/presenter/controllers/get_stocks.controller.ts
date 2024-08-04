import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { IGetStocksUseCase } from '../../domain/usecases/get_stocks.usecase';

export class GetStocksController extends AppController {
  constructor(private getStocksUseCase: IGetStocksUseCase) {
    super();
  }
  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const stocks = await this.getStocksUseCase.exec();
    res.send(200, stocks);
  }
}
