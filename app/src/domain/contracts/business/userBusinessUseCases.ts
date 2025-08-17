import UserEntity from "../../entities/userEntity";

interface UserBusinessUseCases {
    registerUser(userEntity : UserEntity): UserEntity;
    update(userEntity : UserEntity, userId: number): UserEntity;
    findAnyUserById(userId: number): UserEntity | null;
    findAnyUserByUsername(username: string): UserEntity | null;
    listAllUsers(): UserEntity[];
}

export default UserBusinessUseCases;