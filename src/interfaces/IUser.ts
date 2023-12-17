import { UserType } from '../enums/UserType';

export interface IUser {
  getId(): string;
  getLogin(): string;
  getPassword(): string;
  getUserType(): UserType;
}
