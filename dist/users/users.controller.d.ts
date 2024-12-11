import { UsersService } from "./users.service";
import { Role } from "./types/users.types";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(role?: Role): import("./interfaces/users.interfaces").User[];
    findOne(id: number): import("./interfaces/users.interfaces").User;
    create(createUserDto: CreateUserDto): import("./interfaces/users.interfaces").User;
    update(id: number, updateUserDto: UpdateUserDto): import("./interfaces/users.interfaces").User;
    delete(id: number): import("./interfaces/users.interfaces").User;
}
