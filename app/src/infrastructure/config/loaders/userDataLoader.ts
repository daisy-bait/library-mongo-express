import UserAuthUseCases from "../../../domain/contracts/business/userAuthUseCases";
import UserDAO from "../../../domain/contracts/persistence/UserDAO";
import UserEntity from "../../../domain/entities/userEntity";

export default class UserDataLoader {
    constructor(private userDAO: UserDAO, private authService: UserAuthUseCases){ };

    async run() {
        const users = await this.userDAO.selectAll();

        if (users.length === 0) {
            console.log('[MONGO] SEEDING INITIAL USERS...');

            [
                new UserEntity({
                    username: 'kadanarpa',
                    password: this.authService.encryptPassword('200548'),
                    roles: ['ADMIN'],
                }),
                new UserEntity({
                    username: 'mimi_jjj',
                    password: this.authService.encryptPassword('180406'),
                    roles: ['MODERATOR']
                }),
                new UserEntity({
                    username: 'linlin',
                    password: this.authService.encryptPassword('250206'),
                    roles: ['USER'],
                })
            ].map(newUser => this.userDAO.save(newUser))

            console.log('[MONGO] USERS SEEDED...');
        }
    }
}