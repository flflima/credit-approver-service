import { UserController } from './controller/user.controller';
import { UserApproveService } from './service/user-approve.service';

const userApproveService = new UserApproveService();

const userController = new UserController(userApproveService);

export { userController };
