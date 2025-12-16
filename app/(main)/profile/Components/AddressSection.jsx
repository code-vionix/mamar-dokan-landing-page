"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import AddressForm from "./AddressForm";
import AddressList from "./AddressList";
import DeleteConfirmModal from "./DeleteConfirmModal";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function AddressSection({ userId, onSetShowSuccess }) {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [deletingAddressId, setDeletingAddressId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [addressToDelete, setAddressToDelete] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* =======================
     API FUNCTIONS
  ======================== */
  const fetchAddresses = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/user/${userId}/address`);
      const data = await res.json();
      setAddresses(data?.data || []);
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const createAddress = async (data) => {
    const payload = {
      type: "BILLING",
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      addressLine1: data.addressLine1,
      addressLine2: data.addressLine2 || "",
      city: data.city,
      postalCode: data.postalCode || "1000",
      country: data.country || "BD",
      isDefault: data.isDefault,
    };

    try {
      const res = await fetch(`${API_URL}/user/${userId}/address`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      
      // Update state with new address instead of refetching
      if (result?.data) {
        setAddresses((prev) => [...prev, result.data]);
      }
      
      return result;
    } catch (err) {
      console.error("Create Error:", err);
    } finally {
      onSetShowSuccess(true);
    }
  };

  const updateAddress = async (id, data) => {
    const payload = {
      ...data,
      addressLine2: data.addressLine2 || "",
    };
    
    try {
      const res = await fetch(`${API_URL}/user/address/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      const result = await res.json();
      
      // Update state with modified address instead of refetching
      if (result?.data) {
        setAddresses((prev) =>
          prev.map((addr) => (addr.id === id ? result.data : addr))
        );
      }
      
      return result;
    } catch (err) {
      console.error("Update Error:", err);
    } finally {
      onSetShowSuccess(true);
    }
  };

  const deleteAddress = async (id) => {
    try {
      const res = await fetch(`${API_URL}/user/address/${id}`, {
        method: "DELETE",
      });
      
      const result = await res.json();
      
      // Update state by removing deleted address instead of refetching
      setAddresses((prev) => prev.filter((addr) => addr.id !== id));
      
      return result;
    } catch (err) {
      console.error("Delete Error:", err);
    } finally {
      onSetShowSuccess(true);
    }
  };

  /* =======================
     FORM HANDLERS
  ======================== */
  const handleAddressSubmit = useCallback(
    async (data) => {
      setIsSubmitting(true);
      try {
        if (editingAddress) {
          await updateAddress(editingAddress.id, data);
        } else {
          await createAddress(data);
        }
        setShowAddressForm(false);
        setEditingAddress(null);
      } finally {
        setIsSubmitting(false);
      }
    },
    [editingAddress]
  );

  const handleEditAddress = (address) => {
    setEditingAddress(address);
    setShowAddressForm(true);
  };

  const handleDeleteAddress = (address) => {
    setAddressToDelete(address);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (!addressToDelete) return;

    setDeletingAddressId(addressToDelete.id);
    await deleteAddress(addressToDelete.id);
    setDeletingAddressId(null);
    setShowDeleteModal(false);
    setAddressToDelete(null);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setAddressToDelete(null);
  };

  const handleCancelForm = () => {
    setShowAddressForm(false);
    setEditingAddress(null);
  };

  const handleAddNew = () => {
    setShowAddressForm(true);
    setEditingAddress(null);
  };

  // Fetch addresses only on mount
  useEffect(() => {
    fetchAddresses();
  }, []);

  /* =======================
     UI
  ======================== */
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-2xl font-bold font-bengali text-gray-800 mb-6">
        ঠিকানা সমূহ
      </h2>

      {!showAddressForm && (
        <button
          onClick={handleAddNew}
          className="mb-6 bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors font-bengali flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" /> নতুন ঠিকানা যোগ করুন
        </button>
      )}

      {showAddressForm && (
        <AddressForm
          editingAddress={editingAddress}
          onSubmit={handleAddressSubmit}
          onCancel={handleCancelForm}
          isSubmitting={isSubmitting}
        />
      )}

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={showDeleteModal}
        onClose={cancelDelete}
        onConfirm={confirmDelete}
        address={addressToDelete}
        isDeleting={deletingAddressId === addressToDelete?.id}
      />

      <AddressList
        addresses={addresses}
        loading={loading}
        onEdit={handleEditAddress}
        onDelete={handleDeleteAddress}
        deletingAddressId={deletingAddressId}
      />
    </motion.div>
  );
}
