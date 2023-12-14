import { UserType } from '../enums/UserType';
import { User } from '../schemas';

export const getUsers = () => {
  return [
    new User('user0', 'admin@gmail.com', 'admin232', UserType.Admin),
    new User('user1', 'guest', 'guest', UserType.Guest),
  ];
};
