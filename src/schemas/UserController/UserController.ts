import { UserRepository } from "../index";
import { getUsers } from "../../utils";

export class UserController {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();

    this.init();
  }

  init() {
    this.userRepository.save(getUsers());
    this.userRepository.load();
  }

  authorize(login: string, password: string) {
    return this.userRepository.getByLoginAndPassword(login, password);
  }
}
