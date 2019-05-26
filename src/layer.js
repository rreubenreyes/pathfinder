import { Sequence, Combo, Storage } from '../buffers';
import { assert } from './utils/error';

/* Stores keymaps and takes custom function definitions */
export default class Layer {
    constructor(keys) {
        this.keys = keys;
        this.map = new Map(); // map containing trees for all possible key sequences

        /* Register initial branches */
        Object.keys(keys).forEach(k => {
            this.map.set(k, []);
        });

        this.observers = {}; // handle observables
    }

    /**
     * Update this layer's input tree.
     */
    update(binding, routine) {
        let cursor = this.map;

        binding.keySequence.forEach(stroke => {
            /* If the following stroke does not have a registered map, register it */
            if (!cursor[stroke]) {
                cursor.next = new Map();
            }

            /* Make sure the next stroke is a map. If it is a function, then that binding
             * is already occupied. Support binding overwriting later. */
            assert(cursor, 'IS', Map, () => {
                cursor = cursor[stroke];
            })
        });

        /* As long as the current branch is empty, assign it to the passed routine */
        assert(cursor, 'EQ', undefined, () => {
            cursor = routine;
        })
    }

    /**
     * Register a new observable binding.
     */
    register(binding, routine) {
    }

    /**
     * Unregister an observable binding.
     */
    unregister(binding) {

    }

}
