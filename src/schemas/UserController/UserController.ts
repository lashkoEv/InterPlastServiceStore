import { UserRepository } from "../index";

export class UserController {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  authorize(login: string, password: string) {
    return this.userRepository.getByLoginAndPassword(login, password);
  }
}
