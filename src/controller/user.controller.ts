import { Request, Response } from 'express';
import { UserApproveService } from '../service/user-approve.service';

export class UserController {
  constructor(private userApproveService: UserApproveService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    console.log(`Approving credit for ${name}`);

    const status = await this.userApproveService.approve();

    return response.status(200).json({
      status,
    });
  }
}
