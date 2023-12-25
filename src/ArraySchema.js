import BaseSchema from './BaseSchema.js';
import NumberSchema from './NumberSchema.js';

class ArraySchema extends BaseSchema {
  constructor(validators) {
    if (validators === undefined) {
      super([(val) => Array.isArray(val)]);
    } else {
      super(validators);
    }
  }

  allIntegers() {
    const numberSchema = new NumberSchema().isInteger();
    const validatorFunc = (val) => val.every((v) => numberSchema.isValid(v));
    return new NumberSchema([...this.validators, validatorFunc]);
  }
}

export default ArraySchema;
