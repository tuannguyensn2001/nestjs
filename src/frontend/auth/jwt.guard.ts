import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtGuard extends AuthGuard('jwt') {
  // handleRequest(err, user, info: Error) {
  //   // if (info instanceof Token) {
  //   //   // do stuff when token is expired
  //   //   console.log("token expired");
  //   // }
  //   console.log(info);
  //   return err;
  // }
}
