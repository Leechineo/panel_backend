import { InvalidRequestError } from '../../../../core/data/errors/invalid_request.error';
import {
  Request,
  Response,
} from '../../../../core/domain/adapters/router.adapter';
import { AppController } from '../../../../core/presenter/controllers/app_controller';
import { IFindAddressFromZipcodeUseCase } from '../../domain/usecases/find_address_from_zipcode.usecase';

export class GetAddressByZipcodeController extends AppController {
  constructor(
    private findAddressFromZipcodeUseCase: IFindAddressFromZipcodeUseCase,
  ) {
    super();
  }

  async controllerBusiness(req: Request, res: Response): Promise<void> {
    const zipcode = req.params.zipcode;

    if (!zipcode) {
      throw new InvalidRequestError();
    }
    const address = await this.findAddressFromZipcodeUseCase.exec(zipcode);
    return res.send(200, address);
  }
}
