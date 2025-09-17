import React from "react"
import { motion } from "framer-motion"

const SubmitButton = ({ isSubmitting, children }) => (
  <motion.button
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    type="submit"
    disabled={isSubmitting}
    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 font-bengali ${
      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
    }`}
  >
    {isSubmitting ? "লোড হচ্ছে..." : children}
  </motion.button>
)

export default SubmitButton
