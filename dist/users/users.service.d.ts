import { User } from "./interfaces/users.interfaces";
import { Role } from "./types/users.types";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersService {
    private users;
    findAll(role?: Role): User[];
    findOne(id: number): User;
    create(createUserDto: CreateUserDto): User;
    update(id: number, updateUserDto: UpdateUserDto): User;
    delete(id: number): User;
}
