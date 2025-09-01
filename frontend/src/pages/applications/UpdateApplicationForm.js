const FormField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = true,
  className = "w-50 p-1",
  options = [],
  placeholder,
  accept,
  disabled = false,
}) => {
  const commonProps = {
    name,
    id: name,
    required,
    onChange,
    className:
      type === "textarea" ? "form-control mb-3" : "form-control p-2 mb-3",
    placeholder,
    disabled,
  };

  let inputElement;
  switch (type) {
    case "select":
      inputElement = (
        <select {...commonProps} value={value} className="form-select p-2 mb-3">
          <option value="" disabled>
            Select {label}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      );
      break;
    case "textarea":
      inputElement = <textarea {...commonProps} value={value} />;
      break;
    case "file":
      inputElement = <input {...commonProps} type="file" accept={accept} />;
      break;
    default:
      inputElement = <input {...commonProps} type={type} value={value} />;
  }

  return (
    <div className={className}>
      <label className="form-label" htmlFor={name}>
        {label}
        {required && "*"}
      </label>
      {inputElement}
    </div>
  );
};

export default FormField;
