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
    const iter = (val, sh) => {
      const objKeys = Object.keys(val);
      return Object.keys(sh).every((k) => {
        if (!objKeys.includes(k)) return false;
        const shVal = sh[k];
        if (Object.getPrototypeOf(shVal) instanceof BaseSchema) {
          return shVal.isValid(val[k]);
        }
        return iter(val[k], shVal);
      });
    };

    const validatorFunc = (val) => iter(val, objShape);
    return new ObjectSchema([...this.validators, validatorFunc]);
  }
}

export default ObjectSchema;
