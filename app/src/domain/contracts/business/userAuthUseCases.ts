import UserDetails from "../../../common/security/userDetails";
import UserEntity from "../../entities/userEntity";

interface UserAuthUseCases {
    login(username: string, password: string): Promise<{ resolvedUsername: string, resolvedPassword: string }>;
    retrieveAuthId(user: UserDetails): Promise<string>;
    retrieveAuthRoles(user: UserDetails): Promise<string[]>;

    retrieveUserDetailsByUsername(username: string): Promise<UserDetails>;

    encryptPassword(password: string): string;
    comparePasswords(password: string, hashedPassword: string): boolean;
}

export default UserAuthUseCases;