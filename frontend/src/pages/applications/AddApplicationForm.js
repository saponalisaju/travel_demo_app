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
}) => (
  <div className={className}>
    <label className="form-label" htmlFor={name}>
      {label}
      {required && "*"}
    </label>

    {type === "select" ? (
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
    ) : type === "textarea" ? (
      <textarea
        id={name}
        name={name}
        className="form-control mb-3"
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    ) : (
      <input
        className="form-control p-2 mb-3"
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        accept={accept}
        disabled={disabled}
      />
    )}
  </div>
);

export default FormField;
