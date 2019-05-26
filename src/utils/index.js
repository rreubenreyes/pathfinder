import keycodes from '../fixtures/keycodes';

/**
 * Translate library-defined keycode to native keycode.
 */
export const translate =  A => keycodes[A];
