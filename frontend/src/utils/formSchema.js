const createField = (
  label,
  name,
  type,
  className = "w-50 p-1",
  extra = {}
) => ({
  label,
  name,
  type,
  required: true,
  className,
  ...extra,
});

export const formSchema = [
  createField("Surname", "surname", "text"),
  createField("Given Name", "givenN", "text"),
  createField("Email", "email", "email", "w-100 p-1"),
  createField("Phone", "phone", "text"),
  createField("National ID", "nationalId", "text"),
  createField("Sex", "sex", "select", "w-50 p-1", {
    options: ["Male", "Female"],
  }),
  createField("Date of Birth", "dob", "date"),
  createField("Place of Birth Town/City", "birthCity", "text"),
  createField("Current Nationality", "currentN", "text"),
  createField("Identification Marks", "identification", "text", "w-100 p-1"),
  createField("Company Name", "company", "text"),
  createField("Duty Duration", "dutyDuration", "text", "w-50 p-1", {
    value: "8 Hours",
  }),
  createField("Job Title", "jobTitle", "select", "w-50 p-1", {
    options: [
      "Driving",
      "Packing",
      "Construction",
      "Electrician",
      "Holder",
      "Housekeeping",
      "Cleaner",
      "Plumber",
      "Packaging",
      "Cook",
      "Restaurant",
      "Manager",
      "Supervisor",
      "Worker",
      "Caring Operator",
    ],
  }),
  createField("Salary", "salary", "text"),
  createField("Image", "image", "file", "w-100 p-1", { accept: "image/*" }),
  createField("Passport", "passport", "text", "w-100 p-1"),
  createField("Issued Country", "issuedCountry", "text", "w-100 p-1"),
];
