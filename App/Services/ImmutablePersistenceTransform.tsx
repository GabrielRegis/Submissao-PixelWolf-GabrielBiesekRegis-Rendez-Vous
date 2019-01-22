import R from 'ramda';
import * as Immutable from 'seamless-immutable';

// is this object already Immutable?
const isImmutable = R.has('asMutable');

// change this Immutable object into a JS object
const convertToJs = (state: any) => state.asMutable({ deep: true });

// optionally convert this object into a JS object if it is Immutable
const fromImmutable = R.when(isImmutable, convertToJs);

// convert this JS object into an Immutable object
const toImmutable = (raw: any) => Immutable.from(raw);

// the transform interface that redux-persist is expecting
export default {
    out: (state: any) => {
        console.log({ retrieving: state })
        return toImmutable(state);
    },
    in: (raw: any) => {
        console.log({ storing: raw })
        return fromImmutable(raw);
    }
};
