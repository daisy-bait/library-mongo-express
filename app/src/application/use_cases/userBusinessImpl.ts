import UserBusinessUseCases from "../../domain/contracts/business/userBusinessUseCases";
import UserEntity from "../../domain/entities/userEntity";

export default class UserBusinessImpl implements UserBusinessUseCases {

    registerUser(userEntity: UserEntity): UserEntity {
        throw new Error("Method not implemented.");
    }
    update(userEntity: UserEntity, userId: string): UserEntity {
        throw new Error("Method not implemented.");
    }
    findAnyUserById(userId: string): UserEntity {
        throw new Error("Method not implemented.");
    }
    findAnyUserByUsername(username: string): UserEntity | null {
        throw new Error("Method not implemented.");
    }
    listAllUsers(): UserEntity[] {
        throw new Error("Method not implemented.");
    }

}