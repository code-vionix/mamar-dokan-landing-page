import {
  CheckCircle,
  Clock,
  Package,
  ShoppingBag,
  TruckIcon,
  XCircle,
} from "lucide-react";

export function getStatusColor(status) {
  switch (status) {
    case "ordered":
      return "bg-gray-100 text-gray-800";
    case "processing":
      return "bg-blue-100 text-blue-800";
    case "shipped":
    case "outForDelivery":
      return "bg-indigo-100 text-indigo-800";
    case "delivered":
      return "bg-green-100 text-green-800";
    case "cancelled":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
}

export function getStatusBgColor(status) {
  switch (status) {
    case "ordered":
      return "bg-gray-100";
    case "processing":
      return "bg-blue-100";
    case "shipped":
    case "outForDelivery":
      return "bg-indigo-100";
    case "delivered":
      return "bg-green-100";
    case "cancelled":
      return "bg-red-100";
    default:
      return "bg-gray-100";
  }
}

export function getStatusIcon(status) {
  switch (status) {
    case "ordered":
      return <Package className="h-6 w-6 text-gray-600" />;
    case "processing":
      return <Clock className="h-6 w-6 text-blue-600" />;
    case "shipped":
    case "outForDelivery":
      return <TruckIcon className="h-6 w-6 text-indigo-600" />;
    case "delivered":
      return <CheckCircle className="h-6 w-6 text-green-600" />;
    case "cancelled":
      return <XCircle className="h-6 w-6 text-red-600" />;
    default:
      return <Package className="h-6 w-6 text-gray-600" />;
  }
}

export function getTrackingIconBg(status) {
  switch (status) {
    case "ordered":
      return "bg-gray-100 text-gray-600";
    case "processing":
      return "bg-blue-100 text-blue-600";
    case "shipped":
      return "bg-indigo-100 text-indigo-600";
    case "outForDelivery":
      return "bg-amber-100 text-amber-600";
    case "delivered":
      return "bg-green-100 text-green-600";
    case "cancelled":
      return "bg-red-100 text-red-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
}

export function getTrackingIcon(status) {
  switch (status) {
    case "ordered":
      return <ShoppingBag className="h-4 w-4" />;
    case "processing":
      return <Clock className="h-4 w-4" />;
    case "shipped":
      return <TruckIcon className="h-4 w-4" />;
    case "outForDelivery":
      return <TruckIcon className="h-4 w-4" />;
    case "delivered":
      return <CheckCircle className="h-4 w-4" />;
    case "cancelled":
      return <XCircle className="h-4 w-4" />;
    default:
      return <Package className="h-4 w-4" />;
  }
}

export function getTrackingStatusText(status) {
  switch (status) {
    case "ordered":
      return "অর্ডার প্লেস করা হয়েছে";
    case "processing":
      return "প্রসেসিং চলছে";
    case "shipped":
      return "শিপিং হয়েছে";
    case "outForDelivery":
      return "ডেলিভারির জন্য প্রস্তুত";
    case "delivered":
      return "ডেলিভারি সম্পন্ন হয়েছে";
    case "cancelled":
      return "অর্ডার বাতিল করা হয়েছে";
    default:
      return "";
  }
}
