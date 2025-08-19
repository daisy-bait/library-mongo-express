import UserAuthUseCases from "../../domain/contracts/business/userAuthUseCases";
import bcrypt from "bcrypt";
import coreConfig from "../../infrastructure/config/core.config";
import BadCredentialsException from "../../domain/exceptions/badCredentialsException";
import UserDAO from "../../domain/contracts/persistence/UserDAO";
import UserEntity from "../../domain/entities/userEntity";

export default class AuthControllerImpl implements UserAuthUseCases {
    constructor(private readonly userDAO: UserDAO) { }

    async login(username: string, password: string): Promise<{ resolvedUsername: string, resolvedPassword: string }> {
        const userDetails = await this.retrieveUserDetails(username);

        if (!this.comparePasswords(password, userDetails.password)) {
            throw new BadCredentialsException();
        }

        return {
            resolvedUsername: username,
            resolvedPassword: password,
        };
    }

    retrieveAuthId(): string {
        throw new Error("Method not implemented.");
    }

    async retrieveAuthRoles(username: string): Promise<string[]> {
        return (await this.retrieveUserDetails(username)).roles;
    }

    retrieveAuthUserDetails(req: Request) {
    }

    async retrieveUserDetails(username: string): Promise<UserEntity> {
        const userDetails = await this.userDAO.selectByUsername(username);
        if (!userDetails) {
            throw new BadCredentialsException();
        }
        return userDetails;
    }

    encryptPassword(password: string): string {
        return bcrypt.hashSync(password, coreConfig.security.salt);
    }

    comparePasswords(password: string, hashedPassword: string): boolean {
        return bcrypt.compareSync(password, hashedPassword);
    }

}