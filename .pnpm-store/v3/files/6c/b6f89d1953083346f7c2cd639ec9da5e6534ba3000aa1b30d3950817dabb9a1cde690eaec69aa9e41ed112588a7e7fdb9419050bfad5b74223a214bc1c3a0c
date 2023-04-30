import type { ISheet, ISheetObject, UnknownShorthandCompoundProps } from '@theatre/core';
export declare type StringProp = string;
export declare type BooleanProp = boolean;
export declare type AutoProp = StringProp | BooleanProp;
export declare type Props<T extends UnknownShorthandCompoundProps> = {
    name: string;
    props?: T;
    transform?: boolean;
    controls?: boolean;
    snap?: {
        translate?: number;
        rotate?: number;
        scale?: number;
    };
    read?: () => void;
} & Record<string, AutoProp | any>;
export declare type Slots<T extends UnknownShorthandCompoundProps> = {
    default: {
        sheet: ISheet;
        object: ISheetObject<T>;
        values: ISheetObject<T>['value'];
        read: () => void;
    };
};
export declare type Events<T extends UnknownShorthandCompoundProps> = {
    change: ISheetObject<T>['value'];
};
export declare type PropTransform = 'none' | 'euler';
