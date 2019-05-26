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
        const head = this.map.get(binding.keySequence[0]);
        const seq = binding.keySequence.slice(1);

        let cursor = head;
        binding.keySequence.slice(1).forEach(leaf => {
            if (!cursor.next) {
                cursor.next = new Map();
            }

            assert(cursor, 'IS', Map, () => {
                cursor = cursor.next;
            })
        });

        assert(cursor, 'EQ', undefined, () => {
            cursor.next = routine;
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
