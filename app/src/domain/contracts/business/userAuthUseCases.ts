import UserEntity from "../../entities/userEntity";

interface UserAuthUseCases {
    login(): UserEntity;
    retrieveAuthUsername(): string;
    retrieveAuthId(): string;
    retrieveAuthRoles(): string[];
}

export default UserAuthUseCases;