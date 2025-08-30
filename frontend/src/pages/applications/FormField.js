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
}) => (
  <div className={className}>
    {label && (
      <label className="form-label" htmlFor={name}>
        {label}
        {required && "*"}
      </label>
    )}
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
    ) : type === "file" ? (
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
    ) : (
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
    )}
  </div>
);

export default FormField;
