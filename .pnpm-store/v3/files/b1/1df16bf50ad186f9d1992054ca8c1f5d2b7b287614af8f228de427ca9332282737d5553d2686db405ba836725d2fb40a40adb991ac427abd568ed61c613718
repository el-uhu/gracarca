import { get_current_component } from 'svelte/internal';
/**
 * This event dispatcher creates Raw Events unline sveltes own event dispatcher
 * which nests the data in a detail object. This is not nesessary for our use
 * case and makes it harder to work with the data.
 * @returns
 */
export function createRawEventDispatcher() {
    const component = get_current_component();
    const dispatchRawEvent = (type, value) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            callbacks.forEach((fn) => {
                fn(value);
            });
        }
    };
    return dispatchRawEvent;
}
