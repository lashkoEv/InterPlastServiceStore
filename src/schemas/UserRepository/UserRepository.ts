import { User } from "../User/User";
import { IRepository } from "../../interfaces";

export class UserRepository implements IRepository<User> {
  private users: User[];

  constructor() {
    this.users = [];
  }

  save(users: User[] | null): void {
    if (users) {
      users.forEach((user) => {
        localStorage.setItem(user.getId(), JSON.stringify(user));
      });
    }

    this.users.forEach((user) => {
      localStorage.setItem(user.getId(), JSON.stringify(user));
    });
  }

  load(): void {
    for (const key in localStorage) {
      if (key.includes("user")) {
        const user = JSON.parse(localStorage.getItem(key));

        this.add(new User(user.id, user.login, user.password, user.userType));
      }
    }
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
