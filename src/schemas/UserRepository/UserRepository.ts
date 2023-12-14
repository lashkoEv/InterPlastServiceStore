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
  remove(user: User): void {
    const remove = this.users.findIndex((u) => u === user);
    if (remove !== -1) {
      this.users.splice(remove, 1);
    }
  }
  update(updatedUser: User): void {
    const update = this.users.findIndex(
      (user) => user.getId() === updatedUser.getId()
    );
    if (update !== -1) {
      this.users[update] = updatedUser;
    }
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
