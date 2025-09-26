"use client";

import { useState } from "react";

export default function ToggleSwitch({
  label,
  description,
  name,
  initialChecked,
  onToggle,
}) {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onToggle) {
      onToggle(name, newCheckedState);
    }
  };

  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-100">
      <div>
        <h4 className="font-bengali font-medium">{label}</h4>
        <p className="text-sm text-gray-500 font-bengali">{description}</p>
      </div>
      <div className="relative inline-block w-12 align-middle select-none">
        <input
          type="checkbox"
          name={name}
          id={name}
          checked={isChecked}
          onChange={handleToggle}
          className="sr-only"
        />
        <label
          htmlFor={name}
          className={`block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer transition-colors ${
            isChecked ? "bg-amber-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`block h-6 w-6 rounded-full bg-white transform transition-transform ${
              isChecked ? "translate-x-6" : "translate-x-0"
            }`}
          ></span>
        </label>
      </div>
    </div>
  );
}
