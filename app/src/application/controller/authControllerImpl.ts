import UserAuthUseCases from "../../domain/contracts/business/userAuthUseCases";
import UserBusinessUseCases from "../../domain/contracts/business/userBusinessUseCases";
import UserEntity from "../../domain/entities/userEntity";
import bcrypt from "bcrypt";
import coreConfig from "../../infrastructure/config/core.config";
import BadCredentialsException from "../../domain/exceptions/badCredentialsException";
import UserDAO from "../../domain/contracts/persistence/UserDAO";

export default class AuthControllerImpl implements UserAuthUseCases {
    constructor(private readonly userDAO: UserDAO) { }

    async login(username: string, password: string): Promise<{ resolvedUsername: string, resolvedPassword: string }> {
        const userDetails = await this.userDAO.selectByUsername(username);

        if (!userDetails || !this.comparePasswords(password, userDetails.password)) {
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

    retrieveAuthRoles(): string[] {
        throw new Error("Method not implemented.");
    }

    encryptPassword(password: string): string {
        return bcrypt.hashSync(password, coreConfig.security.salt);
    }

    comparePasswords(password: string, hashedPassword: string): boolean {
        return bcrypt.compareSync(password, hashedPassword);
    }

}