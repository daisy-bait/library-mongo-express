import UserEntity from "../../entities/userEntity";

interface UserAuthUseCases {
    login(username: string, password: string): Promise<{ resolvedUsername: string, resolvedPassword: string }>;
    retrieveAuthId(): string;
    retrieveAuthRoles(username: string): Promise<string[]>;

    retrieveUserDetails(username: string): Promise<UserEntity>;

    encryptPassword(password: string): string;
    comparePasswords(password: string, hashedPassword: string): boolean;
}

export default UserAuthUseCases;