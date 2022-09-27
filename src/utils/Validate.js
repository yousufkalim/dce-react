import { toast } from 'react-toastify';
import { kRegExpEmail, kRegExpPassword, kRegExpPhone, kRegExpUserName } from './Constants';

function isEmpty(str) {
  return !str || str.length === 0;
}

class Validators {
  static noValidator() {
    return null;
  }
  static checkBox(name, value) {
    if (!value) {
      return `S'il vous plaît ${name} procéder`;
    }
    return null;
  }
  static addressValidator(name, label, zip, city) {
    if (isEmpty(label) || isEmpty(zip) || isEmpty(city)) {
      return `Non valide ${name}, Sélectionnez l'adresse dans la liste déroulante`;
    }
    return null;
  }

  static nullValidator(name, value) {
    if (isEmpty(value)) {
      return `${name} ne peut pas être vide`;
    }
    return null;
  }

  static selectValidator(name, value) {
    if (isEmpty(value)) {
      return `${name} doit être sélectionnée`;
    }
    return null;
  }

  static lengthValidator(name, value, length) {
    if (isEmpty(value)) {
      return `${name} ne peut pas être vide`;
    }

    if (String(value).length < length) {
      return `${name} ne peut pas être inférieur à ${length} personnages`;
    }

    return null;
  }

  static emailValidator(name, value) {
    if (isEmpty(value)) {
      return `${name} ne peut pas être vide`;
    }

    const regexMatch = value.match(kRegExpEmail);

    if (!regexMatch) {
      return `${name} est invalide`;
    }

    return null;
  }

  static passwordValidator(name, value) {
    if (isEmpty(value)) {
      return `${name} ne peut pas être vide`;
    }

    const regexMatch = value.match(kRegExpPassword);

    if (!regexMatch) {
      return `${name} doit comporter 8 caractères et inclure des majuscules, des minuscules, des caractères spéciaux et des chiffres`;
    }

    return null;
  }

  static phoneNoValidator(name, value) {
    if (isEmpty(value)) {
      return `${name} ne peut pas être vide`;
    }

    const regexMatch = value.match(kRegExpPhone);

    if (!regexMatch) {
      return `${name} est invalide`;
    }

    return null;
  }

  static userNameValidator(name, value) {
    if (isEmpty(value)) {
      return `${name} ne peut pas être vide`;
    }

    const regexMatch = value.match(kRegExpUserName);

    if (!regexMatch) {
      return `${name} ne peut contenir que des lettres, des chiffres ou un trait de soulignement`;
    }

    return null;
  }

  static moneyValidator(name, value) {
    if (isEmpty(value)) {
      return `${name} ne peut pas être vide`;
    }

    if (parseInt(value) > 10000) {
      return `${name} ne peut pas être supérieur à 10000`;
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
