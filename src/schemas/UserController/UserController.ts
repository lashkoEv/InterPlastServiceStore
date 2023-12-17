import { User, UserRepository } from '../index';

import { getUsers } from '../../utils/getUsers';

export class UserController {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();

    this.init();
  }

  init() {
    // this.userRepository.save(getUsers());
    // this.userRepository.load();
  }

  authorize(email: string, password: string) {
    return this.userRepository.validateEmailAndPassword(email, password);
  }
}
