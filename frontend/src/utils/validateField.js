// Schema-driven validation
const validationRules = {
  surname: {
    validate: (v) => v.trim().length >= 3 && v.trim().length <= 31,
    message: "Surname must be between 3 and 31 characters long.",
  },
  givenN: {
    validate: (v) => v.trim().length >= 3 && v.trim().length <= 31,
    message: "Given name must be between 3 and 31 characters long.",
  },
  email: {
    validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    message: "Please enter a valid email address.",
  },
  phone: {
    validate: (v) => /^\d+$/.test(v.trim()),
    message: "Please enter a valid phone number.",
  },
  nationalId: {
    validate: (v) => v.trim() !== "",
    message: "Please enter a valid national ID.",
  },
  sex: {
    validate: (v) => v.trim() !== "",
    message: "Please enter a valid sex.",
  },
  dob: {
    validate: (v) => v.trim() !== "",
    message: "Please enter a valid date of birth.",
  },
  birthCity: {
    validate: (v) => v.trim() !== "",
    message: "Please enter a valid birth city.",
  },
  currentN: {
    validate: (v) => v.trim() !== "",
    message: "Please enter a valid current nationality.",
  },
  identification: {
    validate: (v) => v.trim() !== "",
    message: "Please enter a valid identification.",
  },
  company: {
    validate: (v) => v.trim() !== "",
    message: "Please enter a valid company name.",
  },
  dutyDuration: {
    validate: (v) => v.trim() !== "",
    message: "Please enter a valid duty duration.",
  },
  jobTitle: {
    validate: (v) => v.trim() !== "",
    message: "Please enter a valid job title.",
  },
  salary: {
    validate: (v) => v.trim() !== "",
    message: "Please enter a valid salary.",
  },
  passport: {
    validate: (v) => v.trim() !== "",
    message: "Please enter a valid passport.",
  },
  issuedCountry: {
    validate: (v) => v.trim() !== "",
    message: "Please enter a valid issued country.",
  },
};

export default validationRules;
