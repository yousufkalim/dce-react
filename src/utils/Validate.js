import { toast } from 'react-toastify';
import {
  kRegExpEmail,
  kRegExpPassword,
  kRegExpPhone,
  kRegExpUserName,
} from './Constants';

function isEmpty(str) {
  return !str || str.length === 0;
}

class Validators {
  static noValidator() {
    return null;
  }
  static checkBox(name, value) {
    if (!(value)) {
      return `Please  ${name} to proceed`;
    }
    return null;
  }
  static addressValidator (name,label,zip,city){
    if (isEmpty(label)||isEmpty(zip)||isEmpty(city)) {
      return `Invalid ${name}, Select address from dropdown list`;
    }
    return null;
  }

  static nullValidator(name, value) {
    if (isEmpty(value)) {
      return `${name} can't be empty`;
    }
    return null;
  }

  static selectValidator(name, value) {
    if (isEmpty(value)) {
      return `${name} must be selected`;
    }
    return null;
  }

  static lengthValidator(name, value, length) {
    if (isEmpty(value)) {
      return `${name} can't be empty`;
    }

    if (String(value).length < length) {
      return `${name} can't be less than ${length} characters`;
    }

    return null;
  }

  static emailValidator(name, value) {
    if (isEmpty(value)) {
      return `${name} can't be empty`;
    }

    const regexMatch = value.match(kRegExpEmail);

    if (!regexMatch) {
      return `${name} is invalid`;
    }

    return null;
  }

  static passwordValidator(name, value) {
    if (isEmpty(value)) {
      return `${name} can't be empty`;
    }

    const regexMatch = value.match(kRegExpPassword);

    if (!regexMatch) {
      return `${name} must be 8 characters and include uppercase, lowercase, special character and number`;
    }

    return null;
  }

  static phoneNoValidator(name, value) {
    if (isEmpty(value)) {
      return `${name} can't be empty`;
    }

    const regexMatch = value.match(kRegExpPhone);

    if (!regexMatch) {
      return `${name} is invalid`;
    }

    return null;
  }

  static userNameValidator(name, value) {
    if (isEmpty(value)) {
      return `${name} can't be empty`;
    }

    const regexMatch = value.match(kRegExpUserName);

    if (!regexMatch) {
      return `${name} can only contain alphabets, numbers or underscore`;
    }

    return null;
  }

  static moneyValidator(name, value) {
    if (isEmpty(value)) {
      return `${name} can't be empty`;
    }

    if (parseInt(value) > 10000) {
      return `${name} can't be greater than 10000`;
    }

    return null;
  }
}

function formValidator(data, objsArr) {
  for (let i = 0; i < objsArr.length; i++) {
    const objDataValidationError = objsArr[i].validationFunction
      ? objsArr[i].validationFunction()
      : Validators.nullValidator(objsArr[i].name, data.get(objsArr[i].name));

    if (objDataValidationError) {
      toast.error(objDataValidationError);
      return false;
    }
  }

  return true;
}

export { Validators, formValidator };
