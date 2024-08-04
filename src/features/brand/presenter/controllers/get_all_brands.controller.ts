import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { IGetAllBrandsUseCase } from '../../domain/usecases/get_all_brands.usecase';

export class GetAllBrandsController extends AppController {
  constructor(private getAllBrandsUseCase: IGetAllBrandsUseCase) {
    super();
  }
  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const brands = await this.getAllBrandsUseCase.exec();
    return res.send(200, brands);
  }
}
