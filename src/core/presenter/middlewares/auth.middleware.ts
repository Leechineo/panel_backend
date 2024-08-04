import { TokenGeneratorAdapter } from '../../adapters/token_generator.adapter';
import {
  Middleware,
  Request,
  Response,
} from '../../domain/adapters/router.adapter';
import { UserModel } from '../models/user.model';
import { AuthController } from '../controllers/auth_controller';

export const authMiddleware = (): Middleware => {
  const tokenGenerator = new TokenGeneratorAdapter<{ id: string }>();
  const authController = new AuthController(tokenGenerator, UserModel);
  return async (req: Request, res: Response, next: () => void) => {
    authController.handleRequest(req, res, next);
  };
};
