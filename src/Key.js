/* This is the atomic unit of this framework */
import assert from '../util/error';
import keycodes from '../lib/keycodes.json';

const KEY = JSON.stringify(keycodes);

export default class Key {
    constructor(code) {
        assert(code, 'IS', 'number');

        this.keycode = KEY[code];
    }
}

