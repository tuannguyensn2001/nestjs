import User from '../../../entity/User';

export interface SuccessLogin {
  accessToken: string;
  user: User;
}