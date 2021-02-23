import { Request, Response } from 'express';

export default class UserController {
  async create(request: Request, response: Response) {
    return response.status(201).send({
      name: ';-;',
    });
  }
}
