import { InvalidRequestError } from '../../../../core/data/errors/invalid_request.error';
import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { IConvertImageUseCase } from '../../domain/usecases/convert_image.usecase';
import { IPathTransformUseCase } from '../../domain/usecases/path_transform.usecase';
import { ISaveFileReferenceUseCase } from '../../domain/usecases/save_file_reference.usecase';
import { IUploadFileUseCase } from '../../domain/usecases/upload_file.usecase';

type UploadFileControllerProps = {
  convertImageUseCase: IConvertImageUseCase;
  pathTransformUseCase: IPathTransformUseCase;
  uploadFileUseCase: IUploadFileUseCase;
  saveFileReferenceUseCase: ISaveFileReferenceUseCase;
};

export class UploadFileController extends AppController {
  private convertImageUseCase: IConvertImageUseCase;
  private pathTransformUseCase: IPathTransformUseCase;
  private uploadFileUseCase: IUploadFileUseCase;
  private saveFileReferenceUseCase: ISaveFileReferenceUseCase;

  constructor(props: UploadFileControllerProps) {
    super();
    this.convertImageUseCase = props.convertImageUseCase;
    this.pathTransformUseCase = props.pathTransformUseCase;
    this.uploadFileUseCase = props.uploadFileUseCase;
    this.saveFileReferenceUseCase = props.saveFileReferenceUseCase;
  }

  async controllerBusiness(req: Request, res: Response): Promise<void> {
    let { file } = req;
    let { path } = req.query;
    const { convertImage } = req.query;

    if (!file || !path) {
      throw new InvalidRequestError();
    }

    if (convertImage && Number(convertImage) === 1) {
      const conversionData = await this.convertImageUseCase.exec(path, file);
      path = conversionData.path;
      file = conversionData.file;
    }
    path = this.pathTransformUseCase.exec(path);
    await this.uploadFileUseCase.exec(file, path);
    const fileReference = await this.saveFileReferenceUseCase.exec(path);
    return res.send(200, fileReference);
  }
}
