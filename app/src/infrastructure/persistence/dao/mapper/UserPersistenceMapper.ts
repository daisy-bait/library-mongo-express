import UserEntity from "../../../../domain/entities/userEntity";
import { UserDocument } from "../../schema/UserSchema";

export default class UserPersistenceMapper {
    toEntity(userDocument: UserDocument): UserEntity {
        return new UserEntity({
            id: userDocument._id,
            username: userDocument.username,
            password: userDocument.password,
            roles: userDocument.roles
        });
    }

    toSchema(userEntity: UserEntity): Partial<UserDocument> {
        return {
            username: userEntity.username,
            password: userEntity.password,
            roles: userEntity.roles
        };
    }
}