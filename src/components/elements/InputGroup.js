const TextInput = ({ label, error, className, ...props }) => (
  <div>
    {label && <label>{label}</label>}
    <input className={`form-control mb-3 ${className}`} {...props} />
    {error && <p className="mb-3 text-danger">{error}</p>}
  </div>
);

export default TextInput;
