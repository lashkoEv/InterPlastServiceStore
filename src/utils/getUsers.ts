import { UserType } from "../enums";
import { User } from "../schemas";

export const getUsers = () => {
  return [
    new User("user0", "admin", "admin", UserType.Admin),
    new User("user1", "guest", "guest", UserType.Guest),
  ];
};
