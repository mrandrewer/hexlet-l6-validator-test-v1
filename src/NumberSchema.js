import BaseSchema from './BaseSchema.js';

class NumberSchema extends BaseSchema {

  constructor(validators) {
    if (validators === undefined) {
      super([(val) => typeof val === 'number']);
    } else {
      super(validators);
    }
  }

  isInteger() {
    const validatorFunc = (val) => Number.isInteger(val);
    return new NumberSchema([...this.validators, validatorFunc]);
  }
}

export default NumberSchema;
