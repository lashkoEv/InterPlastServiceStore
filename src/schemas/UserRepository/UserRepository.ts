import { User } from '..';
import { UserType } from '../../enums';
import { IRepository } from '../../interfaces';

export class UserRepository implements IRepository<User> {
  private users: User[];

  constructor() {
    this.users = [
      new User('user0', 'admin@gmail.com', 'admin232', UserType.Admin),
      new User('user1', 'guest@gmail.com', 'guest232', UserType.Guest),
    ];
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

  getByLoginAndPassword(login: string, password: string) {
    return this.users.find(
      (user) => user.getLogin() === login && user.getPassword() === password
    );
  }

  isEmailValid(email: string) {
    if (
      email.includes('@') &&
      email.indexOf('.') > email.indexOf('@') &&
      email.length >= 5
    ) {
      return email;
    }
  }

  isPasswordValid(password: string) {
    if (
      password.length >= 5 &&
      /\d/.test(password) &&
      /[a-zA-Z]/.test(password)
    ) {
      return password;
    }
  }

  validateEmailAndPassword(email: string, password: string) {
    return this.getByLoginAndPassword(email, password);
  }
}
