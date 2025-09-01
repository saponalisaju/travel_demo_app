const FormField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  options = [],
  accept,
  preview,
  placeholder,
  className = "w-50 p-1",
}) => {
  const renderField = () => {
    switch (type) {
      case "select":
        return (
          <select
            id={name}
            name={name}
            className="form-select p-2 mb-3"
            value={value}
            required={required}
            onChange={onChange}
          >
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
      case "file":
        return (
          <>
            <input
              type="file"
              name={name}
              accept={accept}
              className="form-control p-2 mb-3"
              required={required}
              onChange={onChange}
            />
            {preview && (
              <img
                src={preview}
                alt="Selected"
                style={{ width: "100px", height: "100px" }}
              />
            )}
          </>
        );
      default:
        return (
          <input
            type={type}
            name={name}
            id={name}
            className="form-control p-2 mb-3"
            value={value}
            required={required}
            onChange={onChange}
            placeholder={placeholder}
          />
        );
    }
  };

  return (
    <div className={className}>
      {label && (
        <label className="form-label" htmlFor={name}>
          {label}
          {required && "*"}
        </label>
      )}
      {renderField()}
    </div>
  );
};

export default FormField;
