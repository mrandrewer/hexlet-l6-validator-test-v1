import BaseSchema from './BaseSchema.js';

class ObjectSchema extends BaseSchema {
  constructor(validators) {
    if (validators === undefined) {
      super([(val) => typeof val === 'object']);
    } else {
      super(validators);
    }
  }

  shape(objShape) {
    const validatorFunc = (val) => {
      const keys = Object.keys(val);
      const schemaKeys = Object.keys(objShape);
      if (keys.length !== schemaKeys.length) return false;
      return schemaKeys.every((k) => objShape[k].isValid(val[k]));
    };
    return new ObjectSchema([...this.validators, validatorFunc]);
  }
}

export default ObjectSchema;
