
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class Entity<T> {
    constructor(attributes?: Partial<T>) {
        if(attributes) {
            Object.assign(this, attributes);
        }
    }
}