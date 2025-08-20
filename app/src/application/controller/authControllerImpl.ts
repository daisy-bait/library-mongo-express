import UserAuthUseCases from "../../domain/contracts/business/userAuthUseCases";
import bcrypt from "bcrypt";
import coreConfig from "../../infrastructure/config/core.config";
import BadCredentialsException from "../../domain/exceptions/badCredentialsException";
import UserDAO from "../../domain/contracts/persistence/UserDAO";
import UserDetails from "../../common/security/userDetails";
import NotAuthenticatedException from "../../domain/exceptions/notAuthenticatedException";

export default class AuthControllerImpl implements UserAuthUseCases {
    constructor(private readonly userDAO: UserDAO) { }

    async login(username: string, password: string): Promise<{ resolvedUsername: string, resolvedPassword: string }> {
        const userDetails = await this.retrieveUserDetailsByUsername(username);

        if (!this.comparePasswords(password, userDetails.password)) {
            throw new BadCredentialsException();
        }

        return {
            resolvedUsername: username,
            resolvedPassword: password,
        };
    }

    async retrieveAuthId(user: UserDetails): Promise<string> {
        const authUser = await this.userDAO.selectByUsername(user.username);
        if (!authUser) { throw new NotAuthenticatedException() }
        return authUser.id as string;
    }

    async retrieveAuthRoles(user: UserDetails): Promise<string[]> {
        return user.authorities;
    }

    async retrieveUserDetailsByUsername(username: string): Promise<UserDetails> {
        const userDetails = await this.userDAO.selectByUsername(username);
        if (!userDetails) {
            throw new BadCredentialsException();
        }
        return new UserDetails(userDetails.username, userDetails.password, userDetails.roles);
    }

    encryptPassword(password: string): string {
        return bcrypt.hashSync(password, coreConfig.security.salt);
    }

    comparePasswords(password: string, hashedPassword: string): boolean {
        return bcrypt.compareSync(password, hashedPassword);
    }

}