import UserDAO from "../../../domain/contracts/persistence/UserDAO";
import UserEntity from "../../../domain/entities/userEntity";
import { userModel } from "../model/UserModel";
import UserPersistenceMapper from "./mapper/UserPersistenceMapper";

export default class UserMongoDao implements UserDAO {
    private mapper: UserPersistenceMapper;

    constructor() {
        this.mapper = new UserPersistenceMapper();
    }

    async save(userEntity: UserEntity): Promise<UserEntity> {
        return this.mapper.toEntity(
            await new userModel(
                this.mapper.toSchema(userEntity)
            ).save()
        );
    }

    async selectById(userId: string): Promise<UserEntity | null> {
        const promiseUser = await userModel.findById(userId);
        return promiseUser ? this.mapper.toEntity(promiseUser) : null;
    }

    async selectByUsername(username: string): Promise<UserEntity | null> {
        const promiseUser = await userModel.findOne( {username} ).exec();
        return promiseUser ? this.mapper.toEntity(promiseUser) : null;
    }

    async selectAll(): Promise<UserEntity[]> {
        const userList = await userModel.find().exec();
        return userList.map(doc => this.mapper.toEntity(doc));
    }

    async deleteById(userId: string): Promise<boolean> {
        const promiseUser = await this.selectById(userId);
        if (!promiseUser) { return false; }
        await userModel.deleteOne( {userId}).exec();
        return true;
    }

}