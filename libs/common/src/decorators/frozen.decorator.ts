export function frozen(constructor: Function): void {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}