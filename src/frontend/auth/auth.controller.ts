import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { MyResponse } from '../../defines/MyResponse';
import User from '../../entity/User';
import { AuthService } from './auth.service';
import authUserRegister from './dto/auth-user';
import AuthLoginDTO from './dto/auth-login';
import { SuccessLogin } from './defines/Login';
import { JwtGuard } from './jwt.guard';

@Controller('/api/v1')
export class AuthController {
  // eslint-disable-next-line no-unused-vars
  constructor(private service: AuthService) {}

  @Post('/register')
  public async register(
    @Body() userRegister: authUserRegister
  ): Promise<MyResponse<User>> {
    const result = await this.service.register(userRegister);
    return {
      message: 'Dang ky thanh cong',
      data: result
    };
  }

  @Post('/login')
  public async login(@Body() body: AuthLoginDTO): Promise<SuccessLogin> {
    return this.service.login(body.email, body.password);
  }

  @UseGuards(JwtGuard)
  @Get('/me')
  async me(@Req() req) {
    return req.user;
  }
}
