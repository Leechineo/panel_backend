import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { IGetAllFileReferencesUseCase } from '../../domain/usecases/get_all_file_references.usecase';

export class GetAllFileReferencesController extends AppController {
  constructor(
    private getAllFileReferencesUseCase: IGetAllFileReferencesUseCase,
  ) {
    super();
  }
  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const files = await this.getAllFileReferencesUseCase.exec();
    return res.send(200, files);
  }
}
