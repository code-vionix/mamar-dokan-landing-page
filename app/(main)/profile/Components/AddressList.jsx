

import AddressCard from "./AddressCard";

export default function AddressList({
  addresses,
  loading,
  onEdit,
  onDelete,
  deletingAddressId,
}) {
  if (loading) {
    return <p className="text-gray-500">লোড হচ্ছে...</p>;
  }

  if (addresses.length === 0) {
    return (
      <p className="text-gray-500 font-bengali text-center py-8">
        কোনো ঠিকানা পাওয়া যায়নি
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {addresses.map((address) => (
        <AddressCard
          key={address.id}
          address={address}
          onEdit={onEdit}
          onDelete={onDelete}
          isDeleting={deletingAddressId === address.id}
        />
      ))}
    </div>
  );
}
