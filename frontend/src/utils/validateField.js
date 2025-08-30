export const validateField = (name, value) => {
  const trimmed = value.trim();

  const rules = {
    surname: {
      test: (v) => v.length >= 3 && v.length <= 31,
      message: "Surname must be between 3 and 31 characters long.",
    },
    givenN: {
      test: (v) => v.length >= 3 && v.length <= 31,
      message: "Given name must be between 3 and 31 characters long.",
    },
    email: {
      test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
      message: "Please enter a valid email address.",
    },
    phone: {
      test: (v) => /^\d+$/.test(v),
      message: "Please enter a valid phone number.",
    },
    nationalId: {
      test: (v) => v !== "",
      message: "Please enter a valid national ID.",
    },
    sex: {
      test: (v) => v !== "",
      message: "Please enter a valid sex.",
    },
    dob: {
      test: (v) => v !== "",
      message: "Please enter a valid date of birth.",
    },
    birthCity: {
      test: (v) => v !== "",
      message: "Please enter a valid birth city.",
    },
    currentN: {
      test: (v) => v !== "",
      message: "Please enter a valid current nationality.",
    },
    identification: {
      test: (v) => v !== "",
      message: "Please enter a valid identification.",
    },
    company: {
      test: (v) => v !== "",
      message: "Please enter a valid company name.",
    },
    dutyDuration: {
      test: (v) => v !== "",
      message: "Please enter a valid duty duration.",
    },
    jobTitle: {
      test: (v) => v !== "",
      message: "Please enter a valid job title.",
    },
    salary: {
      test: (v) => v !== "",
      message: "Please enter a valid salary.",
    },
    passport: {
      test: (v) => v !== "",
      message: "Please enter a valid passport.",
    },
    issuedCountry: {
      test: (v) => v !== "",
      message: "Please enter a valid issued country.",
    },
  };

  const rule = rules[name];
  if (rule && !rule.test(trimmed)) {
    return rule.message;
  }

  return null;
};
