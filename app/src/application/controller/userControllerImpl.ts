import UserBusinessUseCases from "../../domain/contracts/business/userBusinessUseCases";
import UserDAO from "../../domain/contracts/persistence/UserDAO";
import UserEntity from "../../domain/entities/userEntity";
import NotFoundException from "../../domain/exceptions/notFoundException";

export default class UserControllerImpl implements UserBusinessUseCases {
    constructor(private readonly userDAO: UserDAO) { };

    async registerUser(userEntity: UserEntity): Promise<UserEntity> {
        return this.userDAO.save(userEntity);
    }

    async update(userEntity: UserEntity, userId: string): Promise<UserEntity> {
        userEntity.id ??= userId;
        if (userEntity.id !== userId) {
            throw new Error(`Value Mismatch: Rest User ID → ${userId} isn't equal to Body User ID → ${userEntity.id}`);
        }

        const userDocument = await this.findAnyUserById(userId);

        userDocument.username = userEntity.username;
        userDocument.password = userEntity.password;

        return this.userDAO.save(userDocument);
    }

    async findAnyUserById(userId: string): Promise<UserEntity> {
        const optionalUser = await this.userDAO.selectById(userId);
        if (!optionalUser) { throw new NotFoundException(); }
        return optionalUser;
    }

    async findAnyUserByUsername(username: string): Promise<UserEntity> {
        const optionalUser = await this.userDAO.selectByUsername(username);
        if (!optionalUser) { throw new NotFoundException(); }
        return optionalUser;
    }

    async listAllUsers(): Promise<UserEntity[]> {
        return await this.userDAO.selectAll();
    }

}