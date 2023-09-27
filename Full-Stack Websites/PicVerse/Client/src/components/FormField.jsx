import React from 'react'

const FormField = ({ LabelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
  return (
    <>
      <div className="flex items-center gap-2 mb-2">
        <label 
        htmlFor={name} 
        className="block text-sm font-medium text-grey ">
          {LabelName}
        </label>
        {isSurpriseMe && (
          <button
          type="button"
          onClick={handleSurpriseMe}
          className="font-semibold text-xs bg-[#22918C] py-1 px-2 rounded-[5px] text-white">
            Surprise Me
          </button>
        )}
      </div>

      <input type={type} 
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#22918C] focus:border-[#22918C] outline-none block w-full p-3"
      />
      </>
  )
}

export default FormField