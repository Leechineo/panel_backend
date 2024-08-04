import { InvalidRequestError } from '../../../../core/data/errors/invalid_request.error';
import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { ICreateBrandDTO } from '../../domain/dtos/create_brand.dto';
import { IBrandEntityProps } from '../../domain/entities/brand.entity';
import { ICreateBrandUseCase } from '../../domain/usecases/create_brand.usecase';

export class CreateBrandController extends AppController {
  constructor(private createBrandUseCase: ICreateBrandUseCase) {
    super();
  }
  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const { name, icon, color, brandWebsite } = req.body as IBrandEntityProps;

    if (!name || !icon || !color || !brandWebsite) {
      throw new InvalidRequestError();
    }
    if (!icon.dark || !icon.default) {
      throw new InvalidRequestError();
    }
    if (!color.dark || !color.default) {
      throw new InvalidRequestError();
    }
    const createBrandDTO: ICreateBrandDTO = {
      name: name,
      icon: icon,
      color: color,
      brandWebsite: brandWebsite,
    };
    const createdBrand = await this.createBrandUseCase.exec(createBrandDTO);
    return res.send(201, createdBrand);
  }
}
