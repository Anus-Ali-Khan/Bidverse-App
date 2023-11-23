const CustomInput = ({
  type,
  onChange,
  value,
  placeholder,
  label,
  icon,
  styles,
  required,
  name,
}) => {
  return (
    <div className="relative flex flex-col">
      <label className="font-medium text-lg max-[320px]:text-base">
        {label}
      </label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={`p-2  border border-black rounded-md text-center ${styles}`}
        required={required}
        name={name}
      />
      {icon ?? icon}
    </div>
  );
};

export default CustomInput;
