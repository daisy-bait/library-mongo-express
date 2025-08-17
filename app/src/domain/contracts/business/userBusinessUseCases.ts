import UserEntity from "../../entities/userEntity";

interface UserBusinessUseCases {
    registerUser(userEntity : UserEntity): Promise<UserEntity>;
    update(userEntity : UserEntity, userId: string): Promise<UserEntity>;
    findAnyUserById(userId: string): Promise<UserEntity>;
    findAnyUserByUsername(username: string): Promise<UserEntity>;
    listAllUsers(): Promise<UserEntity[]>;
}

export default UserBusinessUseCases;