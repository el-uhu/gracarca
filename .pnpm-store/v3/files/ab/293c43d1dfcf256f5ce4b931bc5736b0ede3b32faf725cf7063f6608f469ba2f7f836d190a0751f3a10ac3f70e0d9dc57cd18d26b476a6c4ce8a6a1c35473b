import type { PropTransform } from './types';
/**
 * Resolves a property path to the target and the key.
 * @param target
 * @param propertyPath
 * @returns
 */
export declare const resolve: (target: any, propertyPath: string) => {
    target: any;
    key: string;
};
export declare const parseAutoPropKeyByPath: (path: string) => string;
/**
 * Auto props need an initial value to be initialized correctly. This value has
 * to be retrieved from the target and in some special cases the value needs to
 * be parsed differently.
 * @param target
 * @param key
 * @returns
 */
export declare const getAutoPropValue: (parent: any, path: string) => {
    transform: PropTransform;
    value: any;
};
export declare const wait: (ms: number) => Promise<unknown>;
