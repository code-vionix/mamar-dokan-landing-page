"use client";

import { useState } from "react";

export default function EmailCheckbox({
  label,
  name,
  initialChecked,
  onChange,
}) {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleCheckboxChange = (e) => {
    const newCheckedState = e.target.checked;
    setIsChecked(newCheckedState);
    if (onChange) {
      onChange(name, newCheckedState);
    }
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="rounded text-amber-600 focus:ring-amber-500 h-4 w-4 mr-2"
      />
      <label htmlFor={name} className="font-bengali">
        {label}
      </label>
    </div>
  );
}
