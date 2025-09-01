export const validateApplication = (formData, applications) => {
  const {
    surname,
    givenN,
    email,
    phone,
    nationalId,
    sex,
    dob,
    birthCity,
    currentN,
    identification,
    company,
    dutyDuration,
    jobTitle,
    salary,
    passport,
    issuedCountry,
  } = formData;

  const validations = [
    { field: surname, name: "Surname", min: 3, max: 31 },
    { field: givenN, name: "Given name", min: 3, max: 31 },
    { field: email, name: "Email", regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    { field: phone, name: "Phone", regex: /^\d+$/ },
    { field: nationalId, name: "National ID" },
    { field: sex, name: "Sex" },
    { field: dob, name: "Date of birth" },
    { field: birthCity, name: "Birth city" },
    { field: currentN, name: "Current nationality" },
    { field: identification, name: "Identification" },
    { field: company, name: "Company name" },
    { field: dutyDuration, name: "Duty duration" },
    { field: jobTitle, name: "Job title" },
    { field: salary, name: "Salary" },
    { field: passport, name: "Passport" },
    { field: issuedCountry, name: "Issued country" },
  ];

  for (const v of validations) {
    const value = v.field?.trim();
    if (
      !value ||
      (v.min && value.length < v.min) ||
      (v.max && value.length > v.max)
    ) {
      return `${v.name} must be between ${v.min} and ${v.max} characters long.`;
    }
    if (v.regex && !v.regex.test(value)) {
      return `Please enter a valid ${v.name.toLowerCase()}.`;
    }
  }

  if (applications.some((u) => u.email === email)) {
    return "User email already exists. Please try another email.";
  }

  if (applications.some((u) => u.passport === passport)) {
    return "User passport already exists. Please try another passport.";
  }

  return null;
};
