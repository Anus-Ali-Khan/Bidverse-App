const CustomInput = ({
  type,
  onChange,
  value,
  placeholder,
  label,
  icon,
  styles,
}) => {
  return (
    <div className="relative flex flex-col">
      <label className="font-medium text-lg">{label}</label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={`p-2  border border-black rounded-md text-center ${styles}`}
      />
      {icon ?? icon}
    </div>
  );
};

export default CustomInput;