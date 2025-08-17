import UserEntity from "../../entities/userEntity";

interface UserBusinessUseCases {
    registerUser(userEntity : UserEntity): UserEntity;
    update(userEntity : UserEntity, userId: string): UserEntity;
    findAnyUserById(userId: string): UserEntity;
    findAnyUserByUsername(username: string): UserEntity | null;
    listAllUsers(): UserEntity[];
}

export default UserBusinessUseCases;