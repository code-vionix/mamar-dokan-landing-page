"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Upload, X } from "lucide-react";

const UploadImage = ({setFormData}) => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
      setFormData(prev=>({...prev, image: file}))
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setPreview(URL.createObjectURL(file));
      setFormData(prev=>({...prev, image: file}))
    }
  };

  const removeImage = () => {
    setPreview(null);
    setFormData(prev=>({...prev, image: null}))
  };


  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 font-bengali">
        স্ক্রিনশট যোগ করুন
      </h3>

      {!preview && (
        <label
          htmlFor="imageUpload"
          className={`flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-2xl cursor-pointer transition 
          border-gray-300 bg-gray-50 hover:bg-gray-100`}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <Upload className="w-10 h-10 mb-2 text-gray-500" />
          <p className="text-gray-600 text-sm">Drag & Drop অথবা ক্লিক করুন</p>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
            required={true}
          />
        </label>
      )}

      {preview && (
        <div className="relative w-fit">
          <Image
            src={preview}
            alt="Preview"
            width={300}
            height={200}
            className="rounded-xl shadow-md"
          />
          <button
            onClick={removeImage}
            className="absolute top-2 right-2 text-gray-700 hover:text-white cursor-pointer bg-white rounded-full p-1 shadow-md hover:bg-red-600 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadImage;
