/**
 * Most atomic unit for handling more than one keypress.
 */
class Buffer {
    constructor(input, opts) {
        const {
            ordered = true,
            canUndo = false
        } = opts;

        this.keySequence = input;
        this.ordered = ordered;
        this.canUndo = canUndo;
    }
}

export class Sequence extends Buffer {
    constructor(...args) {
        super(...args);
    }
}

export class TimedSequence extends Buffer {
    constructor(...args) {
        super(...args);
    }
}

export class Combo extends Buffer {
    constructor(...args) {
        super(...args);
    }
}
export class Storage extends Buffer {
    constructor(...args) {
        super(...args);
    }
}

