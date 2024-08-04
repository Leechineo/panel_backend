import { InvalidRequestError } from '../../../../core/data/errors/invalid_request.error';
import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { IGetBrandUseCase } from '../../domain/usecases/get_brand.usecase';

export class GetBrandController extends AppController {
  constructor(private getBrandUseCase: IGetBrandUseCase) {
    super();
  }
  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const id = req.params.id;

    if (!id) {
      throw new InvalidRequestError();
    }
    const brand = await this.getBrandUseCase.exec(id);
    return res.send(200, brand);
  }
}
