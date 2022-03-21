
import { Validators, formValidator } from "../utils/Validate";

function login(data){

  const valArr = [
    {
      validationFunction: () => Validators.emailValidator("Email", data.get("Email"))
    },
    {
      validationFunction: () => Validators.lengthValidator("Password", data.get("Password"), 8)
    }
  ];

  const validated = formValidator(data, valArr)

  return validated;

}

function clientRegister(data){

  const valArr = [
    {
      validationFunction: () => Validators.emailValidator("Email", data.get("Email"))
    },
    {
      validationFunction: () => Validators.lengthValidator("Password", data.get("Password"), 8)
    }
  ];

  const validated = formValidator(data, valArr)

  return validated;

}

function clientVerifyEmail(data){

  const valArr = [
    {
      validationFunction: () => Validators.lengthValidator("Verification Code", data.get("Verification Code"), 6)
    }
  ];

  const validated = formValidator(data, valArr)

  return validated;

}

function clientCreateAccount(data){

  const valArr = [
    {
      name: "Full Name",
    },
    {
      name: "Address",
    },
  ];

  const validated = formValidator(data, valArr)

  return validated;

}

function tailorRegister(data){

  const valArr = [
    {
      validationFunction: () => Validators.emailValidator("Email", data.get("Email"))
    },
    {
      validationFunction: () => Validators.lengthValidator("Password", data.get("Password"), 8)
    }
  ];

  const validated = formValidator(data, valArr)

  return validated;

}

function tailorVerifyEmail(data){

  const valArr = [
    {
      validationFunction: () => Validators.lengthValidator("Verification Code", data.get("Verification Code"), 6)
    }
  ];

  const validated = formValidator(data, valArr)

  return validated;

}

function tailorCreateAccount1(data){

  const valArr = [
    {
      name: "Full Name",
    },
    {
      name: "Address",
    },
  ];

  const validated = formValidator(data, valArr)

  return validated;

}

function tailorCreateAccount2(data){

  const valArr = [
    {
      name: "Experience",
    },
    {
      name: "Area of Experience",
    },
    {
      name: "Diploma",
    },
    {
      name: "Speciality",
    },
  ];

  const validated = formValidator(data, valArr)

  return validated;

}

function parseAdBasicSection(data){

  const valArr = [
    {
      validationFunction: () => Validators.selectValidator("Gender", data["gender"])
    },
    {
      validationFunction: () => Validators.selectValidator("Category", data["category"])
    },
    {
      validationFunction: () => Validators.nullValidator("Name", data["name"])
    },
    {
      validationFunction: () => Validators.selectValidator("Cut", data["cut"])
    },
    {
      validationFunction: () => Validators.nullValidator("Measurements", data["measurements"])
    },
    {
      validationFunction: () => Validators.selectValidator("Color", data["color"])
    },
    {
      validationFunction: () => Validators.selectValidator("Fabric", data["fabric"])
    },
  ];

  const validated = formValidator(null, valArr)

  return validated;

}

function parseAdDeliverySection(data){

  const valArr = [
    {
      validationFunction: () => Validators.nullValidator("Delivery Address", data["address"])
    },
    {
      validationFunction: () => Validators.selectValidator("Country", data["country"])
    },
    {
      validationFunction: () => Validators.selectValidator("City", data["city"])
    },
    {
      validationFunction: () => Validators.selectValidator("Delivery Type", data["type"])
    },
    {
      validationFunction: () => Validators.selectValidator("Delivery Date", data["date"])
    },
  ];

  const validated = formValidator(null, valArr)

  return validated;

}

function parseAdNotesSection(data){

  const valArr = [
    {
      validationFunction: () => Validators.nullValidator("Minimum Price", data["min_price"])
    },
    {
      validationFunction: () => Validators.nullValidator("Maximum Price", data["max_price"])
    },
  ];

  const validated = formValidator(null, valArr)

  return validated;

}
  
export {
  login,
  clientRegister,
  clientVerifyEmail,
  clientCreateAccount,
  tailorRegister,
  tailorVerifyEmail,
  tailorCreateAccount1,
  tailorCreateAccount2,
  parseAdBasicSection,
  parseAdDeliverySection,
  parseAdNotesSection
}