import { InvalidRequestError } from '../../../../core/data/errors/invalid_request.error';
import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { IGetFileReferenceUseCase } from '../../domain/usecases/get_file_reference.usecase';

export class GetFileReferenceController extends AppController {
  constructor(private getFileReferenceUseCase: IGetFileReferenceUseCase) {
    super();
  }
  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    if (!id) {
      throw new InvalidRequestError();
    }
    const fileReference = await this.getFileReferenceUseCase.exec(id);
    return res.send(200, fileReference);
  }
}
