<<<<<<< HEAD
import { UserType } from '../enums/UserType';
=======
import { UserType } from "../enums/UserType";
>>>>>>> dev

export interface IUser {
  getId(): string;
  getLogin(): string;
  getPassword(): string;
  getUserType(): UserType;
}
