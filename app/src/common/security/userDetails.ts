
export default class UserDetails {
    constructor(
        public username: string = "GUESS",
        public password: string,
        public authorities: string[] = ["UNKNOWN"]
    ) {}
}