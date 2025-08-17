import UserEntity from "../../entities/userEntity";

interface UserDAO {
    save(userEntity: UserEntity): Promise<UserEntity>;
    selectById(userId: string): Promise<UserEntity | null>;
    selectByUsername(username: string): Promise<UserEntity | null>;
    selectAll(): Promise<UserEntity[]>;
    deleteById(userId: string): Promise<boolean>;
}

export default UserDAO;