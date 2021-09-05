import { HttpStatus, Res } from '@nestjs/common';
import { Response } from 'express';

export default class BaseController {
  private res: Response;

  constructor(@Res() res: Response) {
    this.res = res;
  }

  public response() {
    return this.res.status(HttpStatus.OK).json('nice');
  }
}
