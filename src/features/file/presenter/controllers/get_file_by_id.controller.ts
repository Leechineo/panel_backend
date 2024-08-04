import { InvalidRequestError } from '../../../../core/data/errors/invalid_request.error';
import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { IGetFileFromPathUseCase } from '../../domain/usecases/get_file_from_path.usecase';
import { IGetPathFromIdUseCase } from '../../domain/usecases/get_path_from_id.usecase';

export class GetFileByIdController extends AppController {
  constructor(
    private getPathFromIdUseCase: IGetPathFromIdUseCase,
    private getFileFromPathUseCase: IGetFileFromPathUseCase,
  ) {
    super();
  }
  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const { id } = req.params;

    if (!id) {
      throw new InvalidRequestError();
    }
    const filePath = await this.getPathFromIdUseCase.exec(id);
    const file = await this.getFileFromPathUseCase.exec(filePath);
    res.setHeader('Content-Type', file.type);
    res.send(200, file.buffer);
  }
}
