<<<<<<< HEAD
import { UserType } from '../../enums/UserType';
import { IUser } from '../../interfaces';
=======
import { UserType } from "../../enums/UserType";
import { IUser } from "../../interfaces";
>>>>>>> dev

export class User implements IUser {
  constructor(
    private id: string,
    private login: string,
    private password: string,
    private userType: UserType
  ) {}

  getId(): string {
    return this.id;
  }

  getLogin(): string {
    return this.login;
  }

  getPassword(): string {
    return this.password;
  }

  getUserType(): UserType {
    return this.userType;
  }
}
