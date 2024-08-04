import { InvalidRequestError } from '../../../../core/data/errors/invalid_request.error';
import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { IUpdateBrandDTO } from '../../domain/dtos/update_brand.dto';
import { IBrandEntityProps } from '../../domain/entities/brand.entity';
import { IUpdateBrandUseCase } from '../../domain/usecases/update_brand.usecase';

export class UpdateBrandController extends AppController {
  constructor(private updateBrandUseCase: IUpdateBrandUseCase) {
    super();
  }
  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const id = req.params.id;

    const { name, icon, color, brandWebsite } =
      req.body as Partial<IBrandEntityProps>;

    if (!id) {
      throw new InvalidRequestError();
    }

    if (icon) {
      if (!icon.dark || !icon.default) {
        throw new InvalidRequestError();
      }
    }
    if (color) {
      if (!color.dark || !color.default) {
        throw new InvalidRequestError();
      }
    }
    const updateBrandDTO: IUpdateBrandDTO = {
      id: id,
      name: name,
      icon: icon,
      color: color,
      brandWebsite: brandWebsite,
    };
    const brandUpdated = await this.updateBrandUseCase.exec(updateBrandDTO);
    return res.send(200, brandUpdated);
  }
}
