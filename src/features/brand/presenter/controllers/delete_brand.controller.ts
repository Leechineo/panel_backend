import { InvalidRequestError } from '../../../../core/data/errors/invalid_request.error';
import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { IDeleteBrandUseCase } from '../../domain/usecases/delete_brand.usecase';

export class DeleteBrandController extends AppController {
  constructor(private deleteBrandUseCase: IDeleteBrandUseCase) {
    super();
  }
  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const id = req.params.id;
    if (!id) {
      throw new InvalidRequestError();
    }
    const deletedBrand = await this.deleteBrandUseCase.exec(id);
    return res.send(204, deletedBrand);
  }
}
