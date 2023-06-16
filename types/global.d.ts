export {};

declare global {

    export type ObjectKeys<T> = keyof T;

    export type Nullable<T> = T | null;

    export type Noable<T> = T | undefined;

    export type Empty<T> = Nullable<Noable<T>>;

    export type Writable<T> = {
        -readonly [P in keyof T]: T[P];
    };

    export type DeepPartial<T> = {
        [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
    };

    export type DeepReadonly<T> = {
        readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
    };

    export type DeepWritable<T> = {
        -readonly [P in keyof T]: T[P] extends object ? DeepWritable<T[P]> : T[P];
    };

    export type MayBeRef<T = any> = Ref<T> | T;

    export type MayBeComputedRef<T = any> = ComputedRef<T> | T;

    export type DefaultFn<T = any, R = void> = (value: T) => R;

    export type ArrayFn<T = any, R = void> = (...args: Array<T>) => R;

    export type ParseArray<T> = T extends Array<infer A> ? A : never;

    export type ParseRef<T> = T extends Ref<infer R> ? R : T extends ComputedRef<infer C> ? C : T;
}
