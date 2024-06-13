export function final<T extends { new (...args: any[]): object }>(
    target: T,
): T {
    return class Final extends target {
        public constructor(...args: any[]) {
            if (new.target !== Final) {
                throw new Error(`Cannot extend a final class "${target.name}"`);
            }
            super(...args);
        }
    };
}