export const buildFormData = (formData) => {
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
    image,
    ...rest
  } = formData;

  const fd = new FormData();
  const fields = {
    surname,
    givenN,
    email,
    phone,
    nationalId,
    sex,
    dob,
    birthCity,
    currentN: currentN?.toUpperCase(),
    identification,
    company,
    dutyDuration,
    jobTitle,
    salary,
    passport,
    issuedCountry,
  };

  Object.entries(fields).forEach(([key, val]) => {
    if (val?.trim()) {
      fd.append(key, val.trim());
    }
  });

  Object.entries(rest).forEach(([key, val]) => {
    if (val !== "" && val !== null) {
      fd.append(key, val);
    }
  });

  if (image) {
    fd.append("image", image);
  }

  return fd;
};
