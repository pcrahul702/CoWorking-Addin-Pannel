import React from "react";

interface DropDownProps {
  label: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: any) => void;
  id?: string;
  className: string;
}

const DropDown: React.FC<DropDownProps> = ({
  label,
  options,
  selectedValue,
  onChange,
  className,
  id = "dropdown",
}) => {
  return (
    <div className={`${className}`}>
      {/* <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label> */}
      <select
        id={id}
        name={label}
        value={selectedValue}
        onChange={(e) => onChange(e)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base text-gray-700 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
