
export default class Entity<T> {
    constructor(attributes?: Partial<T>) {
        if(attributes) {
            Object.assign(this, attributes);
        }
    }
}