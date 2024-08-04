import { LoginRequiredError } from '../../../features/auth/data/errors/login_required.error';
import { UserEntity } from '../../../features/user/data/entities/user.entity';
import { IUserEntity } from '../../../features/user/domain/entities/user.entity';
import { IAppModel } from '../../domain/adapters/app_model.adapter';
import { Request, Response } from '../../domain/adapters/router.adapter';
import { ITokenGenerator } from '../../domain/adapters/token_generator.adapter';
import { AppController } from './app_controller';

export class AuthController extends AppController {
  constructor(
    private tokenGenerator: ITokenGenerator<{ id: string }>,
    private userModel: IAppModel<IUserEntity>,
  ) {
    super();
  }
  async controllerBusiness(
    req: Request,
    res: Response,
    next: () => void,
  ): Promise<void> {
    const authHeader = req.headers.authorization;
    if (!authHeader || typeof authHeader !== 'string') {
      throw new LoginRequiredError();
    }
    const parts = authHeader.split(' ');
    if (parts.length !== 2) {
      throw new LoginRequiredError();
    }
    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) {
      throw new LoginRequiredError();
    }
    const tokenData = await this.tokenGenerator.verify(
      token,
      process.env.AUTH_HASH ?? '',
    );
    const user = await this.userModel.findById(tokenData.id);
    if (user) {
      if (user.admin) {
        req.defineUser(UserEntity.fromJson(user));
        return next();
      }
    }
    throw new LoginRequiredError();
  }
}
