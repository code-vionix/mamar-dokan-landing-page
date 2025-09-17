export default function RegisterInput({ id, label, type = "text", value, onChange }) {
    return (
      <div>
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 font-bengali"
        >
          {label}
        </label>
        <input
          id={id}
          name={id}
          type={type}
          required
          value={value}
          onChange={onChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500"
        />
      </div>
    )
  }
  