
import { Settings, Trash2 } from "lucide-react";

export default function AddressCard({ address, onEdit, onDelete, isDeleting }) {
  return (
    <div className="border rounded-lg p-4 hover:border-amber-200 transition-colors">
      <div className="flex justify-between">
        <h3 className="font-bengali font-medium">
          {address.firstName} {address.lastName}{" "}
          {address.isDefault && (
            <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full ml-2">
              ডিফল্ট
            </span>
          )}
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(address)}
            className="text-gray-500 hover:text-amber-600"
          >
            <Settings size={16} />
          </button>
          <button
            onClick={() => onDelete(address)}
            disabled={isDeleting}
            className="text-gray-500 hover:text-red-600"
          >
            {isDeleting ? (
              <span className="inline-block h-4 w-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></span>
            ) : (
              <Trash2 size={16} />
            )}
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-1 font-bengali">
        {address.addressLine1}
      </p>
      {address.addressLine2 && (
        <p className="text-sm text-gray-600 font-bengali">
          {address.addressLine2}
        </p>
      )}
      <p className="text-sm text-gray-600 font-bengali">{address.city}</p>
      <p className="text-sm text-gray-600 font-bengali">
        পোস্টাল কোড: {address.postalCode}
      </p>
      <p className="text-sm text-gray-600 font-bengali">
        দেশ: {address.country}
      </p>
      <p className="text-sm text-gray-600 mt-2 font-bengali">
        ফোন: {address.phone}
      </p>
    </div>
  );
}
