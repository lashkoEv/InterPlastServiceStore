import { UserType } from "../enums";

export interface IUser {
  getId(): string;
  getLogin(): string;
  getPassword(): string;
  getUserType(): UserType;
}
