import { SvelteComponentTyped } from "svelte";
import type { ISequence } from '@theatre/core';
declare const __propDef: {
    props: {
        name?: string | undefined;
        instance?: string | undefined;
        /**
           * If a number is passed, it will be used as the delay to start autoplaying
           */ autoPlay?: boolean | ({
            iterationCount?: number | undefined;
            range?: [from: number, to: number] | undefined;
            rate?: number | undefined;
            direction?: ("reverse" | "alternate" | "normal" | "alternateReverse") | undefined;
        } & {
            delay?: number | undefined;
        }) | undefined;
        /**
           * Resets the playhead to 0 when the sheet is unmounted or mounted or both
           */ autoReset?: boolean | "onMount" | "onDestroy" | undefined;
        autoPause?: boolean | undefined;
        isPlaying?: boolean | undefined;
        sheet?: import("@theatre/core").ISheet | undefined;
        sequence?: ISequence | undefined;
        play?: ((conf?: {
            iterationCount?: number | undefined;
            range?: [from: number, to: number] | undefined;
            rate?: number | undefined;
            direction?: ("reverse" | "alternate" | "normal" | "alternateReverse") | undefined;
        } | undefined) => Promise<boolean>) | undefined;
        pause?: (() => void) | undefined;
        position?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            sheet: import("@theatre/core").ISheet;
            sequence: ISequence;
            isPlaying: boolean;
            play: (conf?: {
                iterationCount?: number | undefined;
                range?: [from: number, to: number] | undefined;
                rate?: number | undefined;
                direction?: ("reverse" | "alternate" | "normal" | "alternateReverse") | undefined;
            } | undefined) => Promise<boolean>;
            pause: () => void;
        };
    };
};
export declare type SheetProps = typeof __propDef.props;
export declare type SheetEvents = typeof __propDef.events;
export declare type SheetSlots = typeof __propDef.slots;
export default class Sheet extends SvelteComponentTyped<SheetProps, SheetEvents, SheetSlots> {
    get sheet(): import("@theatre/core").ISheet;
    get sequence(): ISequence;
    get play(): (conf?: {
        iterationCount?: number | undefined;
        range?: [from: number, to: number] | undefined;
        rate?: number | undefined;
        direction?: ("reverse" | "alternate" | "normal" | "alternateReverse") | undefined;
    } | undefined) => Promise<boolean>;
    get pause(): () => void;
}
export {};
