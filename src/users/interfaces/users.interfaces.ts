import { Role } from "../types/users.types";

interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
}

interface CreateUser {
  name: string;
  email: string;
  role: Role;
}

interface UpdateUser {
  name?: string;
  email?: string;
  role?: Role;
}

export { User, CreateUser, UpdateUser };
