import type { Ref, ComputedRef, PropType as _PropType } from "vue";

declare global {

    declare type PropType<T> = _PropType<T>;

    declare type Nullable<T> = T | null;

    declare type Noable<T> = T | undefined;

    declare type Empty<T> = Nullable<Noable<T>>;

    declare type Writable<T> = {
        -readonly [P in keyof T]: T[P];
    };

    declare type DeepPartial<T> = {
        [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
    };

    declare type DeepReadonly<T> = {
        readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
    };

    declare type DeepWritable<T> = {
        -readonly [P in keyof T]: T[P] extends object ? DeepWritable<T[P]> : T[P];
    };

    declare type MayBeRef<T = any> = Ref<T> | T;

    declare type MayBeComputedRef<T = any> = ComputedRef<T> | T;

    declare type DefaultFn<T = any, R = void> = (value: T) => R;

    declare type ArrayFn<T = any, R = void> = (...args: Array<T>) => R;

    declare type ParseArray<T> = T extends Array<infer A> ? A : never;

    declare type ParseRef<T> = T extends Ref<infer R> ? R : T extends ComputedRef<infer C> ? C : T;
}
