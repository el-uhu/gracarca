/**
    Calculate the unique values of desired fields
    For example, data like this:
    [{ x: 0, y: -10 }, { x: 10, y: 0 }, { x: 5, y: 10 }]
    and a fields object like this:
    `{'x': d => d.x, 'y': d => d.y}`
    returns an object like this:
    `{ x: [0, 10, 5], y: [-10, 0, 10] }`
    @param {Array} data A flat array of objects.
    @param {{x?: Function, y?: Function, z?: Function, r?: Function}} fields An object containing `x`, `y`, `r` or `z` keys that equal an accessor function. If an accessor function returns an array of values, each value will also be evaluated..
    @returns {{x?: [min: Number, max: Number]|[min: String, max: String], y?: [min: Number, max: Number]|[min: String, max: String], z?: [min: Number, max: Number]|[min: String, max: String], r?: [min: Number, max: Number]|[min: String, max: String]}} An object with the same structure as `fields` but instead of an accessor, each key contains an array of unique items.
*/
export default function calcUniques(data: any[], fields: {
    x?: Function;
    y?: Function;
    z?: Function;
    r?: Function;
}, { sort }?: {
    sort?: boolean;
}): {
    x?: [min: number, max: number] | [min: string, max: string];
    y?: [min: number, max: number] | [min: string, max: string];
    z?: [min: number, max: number] | [min: string, max: string];
    r?: [min: number, max: number] | [min: string, max: string];
};
