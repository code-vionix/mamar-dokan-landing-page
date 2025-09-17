import React from "react"

const InputField = ({ label, id, type, register, errors }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700 font-bengali">
      {label}
    </label>
    <input
      id={id}
      type={type}
      {...(register ? register : {})}  
      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
    />
    {errors[id] && (
      <p className="text-red-500 text-sm mt-1 font-bengali">{errors[id].message}</p>
    )}
  </div>
)

export default InputField
