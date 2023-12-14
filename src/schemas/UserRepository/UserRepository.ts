import { User } from '..';
import { UserType } from '../../enums';
import { IRepository } from '../../interfaces';

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
      if (key.includes('user')) {
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

  // validateEmailAndPassword() {
  //   if (
  //     this.getEmailInput().value.includes('@') &&
  //     this.getEmailInput().value.indexOf('.') >
  //       this.getEmailInput().value.indexOf('@') &&
  //     this.getEmailInput().value.length >= 5 &&
  //     this.getPasswordInput().value.length >= 5 &&
  //     /\d/.test(this.getPasswordInput().value) &&
  //     /[a-zA-Z]/.test(this.getPasswordInput().value)
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

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
    if (!this.isEmailValid(email)) {
      return false;
    }

    return this.isPasswordValid(password);
  }
}
