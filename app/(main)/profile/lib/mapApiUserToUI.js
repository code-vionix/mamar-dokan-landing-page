function mapApiUserToUI(apiUser) {

  return {
    
    user: {
        id: apiUser.id,
      name: apiUser.name,
      email: apiUser.email,
      phone: apiUser.phone,
      joined: new Date(apiUser.createdAt).toLocaleDateString("bn-BD", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      avatar: apiUser.avatarUrl,
    },

 addresses:
  apiUser.addresses?.map((addr) => ({
    id: addr.id,
    userId: addr.userId,
    type: addr.type,
    isDefault: Boolean(addr.isDefault),

    firstName: addr.firstName,
    lastName: addr.lastName,
    addressLine1: addr.addressLine1,
    addressLine2: addr.addressLine2,
    city: addr.city,
    postalCode: addr.postalCode,
    country: addr.country,
    phone: addr.phone,
    createdAt: addr.createdAt,
    updatedAt: addr.updatedAt,

  
    name: addr.type === "BILLING" ? "বাড়ি" : "অফিস",

    recipient: [addr.firstName, addr.lastName]
      .filter(Boolean)
      .join(" "),

    address: [addr.addressLine1, addr.addressLine2]
      .filter(Boolean)
      .join(", "),

    cityLabel: `${addr.city}${addr.postalCode ? " - " + addr.postalCode : ""}`,
  })) || [],


    paymentMethods: [],

    privacy: {
      shareData: true,
      saveSearchHistory: false,
      savePaymentInfo: true,
    },

    notifications: {
      orderUpdates: true,
      promotions: true,
      newArrivals: false,
      accountUpdates: true,
    },
  };
}
export default mapApiUserToUI;