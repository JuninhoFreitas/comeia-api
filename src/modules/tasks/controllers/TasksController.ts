import { Request, Response } from 'express';

export default class TasksController {
  public async list(_request: Request, response: Response): Promise<Response> {
    return response.json({
      success: true,
      data: {
        res: 'OK'
      },
    });
  }
}
