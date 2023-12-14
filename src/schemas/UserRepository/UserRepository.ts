import { User } from "../User/User";
import { IRepository } from "../../interfaces";

export class UserRepository implements IRepository<User> {
  private users: User[];

  constructor() {
    this.users = [];
  }

  getAll(): User[] {
    return this.users;
  }

  add(user: User): void {
    this.users.push(user);
  }

  addMany(users: User[]): void {
    users.forEach((user) => this.users.push(user));
  }

  getByLoginAndPassword(login: string, password: string) {
    return this.users.find(
      (user) => user.getLogin() === login && user.getPassword() === password
    );
  }
}
