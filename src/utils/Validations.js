import { Validators, formValidator } from "../utils/Validate";

function login(data) {
  const valArr = [
    {
      validationFunction: () =>
        Validators.emailValidator("Email", data.get("Email")),
    },
    {
      validationFunction: () =>
        Validators.lengthValidator("Password", data.get("Password"), 8),
    },
  ];

  const validated = formValidator(data, valArr);

  return validated;
}

function clientRegister(data) {
  const valArr = [
    {
      validationFunction: () =>
        Validators.emailValidator("Email", data.get("Email")),
    },
    {
      validationFunction: () =>
        Validators.lengthValidator("Password", data.get("Password"), 8),
    },
  ];

  const validated = formValidator(data, valArr);

  return validated;
}

function clientVerifyEmail(data) {
  const valArr = [
    {
      validationFunction: () =>
        Validators.lengthValidator(
          "Verification Code",
          data.get("Verification Code"),
          6
        ),
    },
  ];

  const validated = formValidator(data, valArr);

  return validated;
}

function clientCreateAccount(data) {
  const valArr = [
    {
      name: "Full Name",
    },
    {
      name: "Address",
    },
    {
      name: "Zip Code",
    },
    {
      name: "City",
    },
  ];

  const validated = formValidator(data, valArr);

  return validated;
}

function tailorRegister(data) {
  const valArr = [
    {
      validationFunction: () =>
        Validators.emailValidator("Email", data.get("Email")),
    },
    {
      validationFunction: () =>
        Validators.lengthValidator("Password", data.get("Password"), 8),
    },
  ];

  const validated = formValidator(data, valArr);

  return validated;
}

function tailorVerifyEmail(data) {
  const valArr = [
    {
      validationFunction: () =>
        Validators.lengthValidator(
          "Verification Code",
          data.get("Verification Code"),
          6
        ),
    },
  ];

  const validated = formValidator(data, valArr);

  return validated;
}

function tailorCreateAccount(data) {
  const valArr = [
    {
      name: "Name of your company",
    },
    {
      name: "Name",
    },
    {
      name: "Phone No",
    },
  ];

  const validated = formValidator(data, valArr);

  return validated;
}

function parseAdBasicSection(data) {
  const valArr = [
    {
      validationFunction: () =>
        Validators.selectValidator("Gender", data["gender"]),
    },
    {
      validationFunction: () =>
        Validators.selectValidator("Category", data["category"]),
    },
    {
      validationFunction: () => Validators.nullValidator("Name", data["name"]),
    },
    {
      validationFunction: () => Validators.selectValidator("Cut", data["cut"]),
    },
    {
      validationFunction: () =>
        Validators.selectValidator("Color", data["color"]),
    },
    {
      validationFunction: () =>
        Validators.selectValidator("Fabric", data["fabric"]),
    },
  ];

  if (data["measurements"].type == "static") {
    valArr.push({
      validationFunction: () =>
        Validators.nullValidator("Measurements", data["measurements"].value),
    });
  }

  const validated = formValidator(null, valArr);

  return validated;
}

function parseAdDeliverySection(data) {
  const valArr = [
    {
      validationFunction: () =>
        Validators.nullValidator("Delivery Address", data["address"]),
    },
    {
      validationFunction: () =>
        Validators.selectValidator("Country", data["country"]),
    },
    {
      validationFunction: () =>
        Validators.selectValidator("City", data["city"]),
    },
    {
      validationFunction: () =>
        Validators.selectValidator("Delivery Type", data["type"]),
    },
    {
      validationFunction: () =>
        Validators.selectValidator("Delivery Date", data["date"]),
    },
  ];

  const validated = formValidator(null, valArr);

  return validated;
}

function parseAdNotesSection(data) {
  const valArr = [
    {
      validationFunction: () =>
        Validators.selectValidator("Choose Method", data["type"]),
    },
    {
      validationFunction: () =>
        Validators.nullValidator("Minimum Price", data["min_price"]),
    },
    {
      validationFunction: () =>
        Validators.nullValidator("Maximum Price", data["max_price"]),
    },
  ];

  const validated = formValidator(null, valArr);

  return validated;
}

function sendQuote(data) {
  const valArr = [
    {
      validationFunction: () =>
        Validators.nullValidator("Price", data["price"]),
    },
    {
      validationFunction: () =>
        Validators.nullValidator("Description", data["description"]),
    },
  ];

  const validated = formValidator(null, valArr);

  return validated;
}

function tailorCreateCatalog(data) {
  const valArr = [
    {
      validationFunction: () => Validators.nullValidator("Name", data["name"]),
    },
    {
      validationFunction: () =>
        Validators.selectValidator("Gender", data["gender"]),
    },
    {
      validationFunction: () =>
        Validators.selectValidator("Category", data["category"]),
    },
    {
      validationFunction: () =>
        Validators.selectValidator("Price", data["price"]),
    },
    {
      validationFunction: () =>
        Validators.selectValidator("Description", data["description"]),
    },
  ];

  const validated = formValidator(null, valArr);

  return validated;
}

function tailorEditProfile(data) {
  const valArr = [
    {
      validationFunction: () =>
        Validators.nullValidator("Phone", data["phone"]),
    },
    {
      validationFunction: () =>
        Validators.nullValidator("Experience", data["experience"]),
    },
    {
      validationFunction: () =>
        Validators.nullValidator("Diploma", data["diploma"]),
    },
    {
      validationFunction: () =>
        Validators.nullValidator("Shop Name", data["shop_name"]),
    },
    {
      validationFunction: () =>
        Validators.nullValidator("Hourly Rate", data["hourly_rate"]),
    },
    {
      validationFunction: () =>
        Validators.nullValidator("Free Shipping", data["free_shipping_rate"]),
    },
  ];

  const validated = formValidator(data, valArr);

  return validated;
}

function clientEditProfile(data) {
  const valArr = [
    {
      validationFunction: () =>
        Validators.nullValidator("Phone", data["phone"]),
    },
  ];

  const validated = formValidator(data, valArr);

  return validated;
}

function tailorCompleteOrder(data) {
  const valArr = [
    {
      validationFunction: () =>
        Validators.nullValidator("Rating", data["rating"]),
    },
    {
      validationFunction: () =>
        Validators.nullValidator("Details", data["details"]),
    },
  ];

  const validated = formValidator(null, valArr);

  return validated;
}

function clientFeedbackOrder(data) {
  const valArr = [
    {
      validationFunction: () =>
        Validators.nullValidator("Rating", data["rating"]),
    },
    {
      validationFunction: () =>
        Validators.nullValidator("Details", data["details"]),
    },
  ];

  const validated = formValidator(null, valArr);

  return validated;
}

function parseMeasurementCircumferenceSection(data) {
  const valArr = [
    {
      validationFunction: () => Validators.nullValidator("Arm", data["arm"]),
    },
    {
      validationFunction: () =>
        Validators.nullValidator("Chest", data["chest"]),
    },
    {
      validationFunction: () =>
        Validators.nullValidator("Waist", data["waist"]),
    },
    {
      validationFunction: () => Validators.nullValidator("Hip", data["hip"]),
    },
    {
      validationFunction: () =>
        Validators.nullValidator("Thigh", data["thigh"]),
    },
    {
      validationFunction: () => Validators.nullValidator("Calf", data["calf"]),
    },
    {
      validationFunction: () =>
        Validators.nullValidator("Ankle", data["ankle"]),
    },
  ];

  const validated = formValidator(null, valArr);

  return validated;
}

function parseMeasurementLengthSection(data) {
  const valArr = [
    {
      validationFunction: () =>
        Validators.nullValidator("Head to floor height", data["head_to_floor"]),
    },
    {
      validationFunction: () =>
        Validators.nullValidator(
          "From shoulder to floot",
          data["shoulder_to_floor"]
        ),
    },
    {
      validationFunction: () =>
        Validators.nullValidator("From waist to floor", data["waist_to_floor"]),
    },
    {
      validationFunction: () =>
        Validators.nullValidator("Arm length", data["arm_length"]),
    },
    {
      validationFunction: () =>
        Validators.nullValidator("Leg length", data["leg_length"]),
    },
  ];

  const validated = formValidator(null, valArr);

  return validated;
}

export {
  login,
  clientRegister,
  clientVerifyEmail,
  clientCreateAccount,
  tailorRegister,
  tailorVerifyEmail,
  tailorCreateAccount,
  parseAdBasicSection,
  parseAdDeliverySection,
  parseAdNotesSection,
  sendQuote,
  tailorCreateCatalog,
  tailorEditProfile,
  clientEditProfile,
  tailorCompleteOrder,
  clientFeedbackOrder,
  parseMeasurementCircumferenceSection,
  parseMeasurementLengthSection,
};
