import BaseSchema from './BaseSchema.js';

class NumberSchema extends BaseSchema {
  constructor() {
    super();
    this.addValidator((val) => typeof val === 'number');
  }
}

export default NumberSchema;
