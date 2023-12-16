<<<<<<< HEAD
import { User, UserRepository } from '../index';

import { getUsers } from '../../utils/getUsers';
=======
import { UserRepository } from "../index";

import { getUsers } from "../../utils/getUsers";
>>>>>>> dev

export class UserController {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();

    this.init();
  }

  init() {
<<<<<<< HEAD
    this.userRepository.save(getUsers());
    this.userRepository.load();
  }

  authorize(email: string, password: string) {
    return this.userRepository.validateEmailAndPassword(email, password);
=======
    this.userRepository.addMany(getUsers());
  }

  authorize(email: string, password: string) {
    return this.userRepository.validateEmailAndPassword(email, password)
      ? this.userRepository.getByLoginAndPassword(email, password)
      : undefined;
>>>>>>> dev
  }
}
