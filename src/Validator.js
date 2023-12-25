import ArraySchema from './ArraySchema.js';
import NumberSchema from './NumberSchema.js';

class Validator {
  number() {
    return new NumberSchema();
  }

  array() {
    return new ArraySchema();
  }
}

export default Validator;
