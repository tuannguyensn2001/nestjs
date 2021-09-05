import {
  ForbiddenException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from '../../entity/User';
import { Repository } from 'typeorm';
import authUserRegister from './dto/auth-user';
import { JwtService } from '@nestjs/jwt';
import { SuccessLogin } from './defines/Login';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService
  ) {}

  public async register(user: authUserRegister): Promise<User> {
    const newUser = this.userRepository.create(user);
    return this.userRepository.save(newUser);
  }

  // async validateUser(email: string, pass: string): Promise<any> {
  //   return await this.userRepository.findOne(email);
  //   // if (user && user.password === pass) {
  //   //   const { password, ...result } = user;
  //   //   return result;
  //   // }
  //   // return null;
  // }

  public async login(email: string, password: string): Promise<SuccessLogin> {
    const result = await this.userRepository.findOne({
      email: email
    });

    if (!result) throw new NotFoundException('Email không tồn tại');

    if (result.password !== password)
      throw new ForbiddenException('Mật khẩu không chính xác');

    const payload = { sub: result };
    return {
      accessToken: this.jwtService.sign(payload),

      user: result
    };
  }
}
