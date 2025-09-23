import React from 'react'
import { motion } from "framer-motion"

import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'


const CheckoutForm = ({step, setStep, onSubmit, formData, setFormData}) => {


  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleBack = () => {
    if (step === 2) setStep(1)
    else if (step === 3) setStep(2)
    window.scrollTo(0, 0)
  }
  return (
    <div className="w-full lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                {/* Step 1: Shipping Address */}
                <StepOne step={step} onSubmit={onSubmit} formData={formData} handleChange={handleChange} />

                {/* Step 2: Shipping & Payment */}
                <StepTwo step={step} handleBack={handleBack} onSubmit={onSubmit} setFormData={setFormData} formData={formData} handleRadioChange={handleRadioChange} handleChange={handleChange} />

                {/* Step 3: Order Confirmation */}
                <StepThree step={step} formData={formData}  />
                
              </motion.div>
            </div>
  )
}


export default CheckoutForm