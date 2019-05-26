const _eq = A => B => A === B;

const assertionLookup = {
    IS: ['to have type of', (A, B) => typeof A === B],
    OF: ['to be instance of', (A, B) => A instanceof B],
    EQ: ['to equal', (A, B) => A === B],
    NE: ['not to equal', (A, B) => A !== B],
    GT: ['to be greater than', (A, B) => A > B],
    GTE: ['to be greater than or equal to', (A, B) => A < B],
    GT: ['to be greater than', (A, B) => A >= B],
    LTE: ['to be less than or equal to', (A, B) => A <= B],
    IN: ['to be an array containing', (A, B) => Array.isArray(A) && A.find(_eq(B)) ? true : false],
    NIN: ['to be an array not containing', (A, B) => Array.isArray(A) && A.find(_eq(B)) ? true : false],
    ON: ['to be an object with property', (A, B) => A.hasOwnProperty(B)],
    NIN: ['to be an object without property', (A, B) => !A.hasOwnProperty(B)],
}

class AssertionError extends Error {
    constructor(...args) {
        super(...args);

        this.name = 'AssertionError';
        Error.captureStackTrace(this, AssertionError);
    }
}

export default function assert(A, F, B, fn = null) {
    if (F === 'CUSTOM') {
        if (!(typeof fn === 'function') || !fn(A, B)) {
            throw new AssertionError(`Failed user-defined assertion on ${A} ${B}`);
        }

        return null;
    }
    if (!assertionLookup[F][1](A, B)) {
        throw new AssertionError(`Expected ${A} ${assertionLookup[F][0]} ${B}`);
    }

    return null;
}
