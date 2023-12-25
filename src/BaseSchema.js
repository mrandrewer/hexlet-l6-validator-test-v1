class BaseSchema {
  validators = [];

  addValidator(validatorFunc) {
    this.validators.push(validatorFunc);
  }

  isValid(value) {
    return this.validators.every((v) => v(value));
  }
}
export default BaseSchema;
