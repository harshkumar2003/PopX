import React from "react";

const InputForm = ({ lname, assetrix = "", required = false, type, name, onChange }) => {
  return (
    <>
      <label className="absolute -top-2 left-3 bg-white px-1 text-sm font-medium text-[#8042FE]">
        {lname}
        <span className="text-red-700">{assetrix}</span>
      </label>
      {type === "radio" ? (
        <div className="ml-4">
          <label className="mr-4">
            <input type="radio" name={name} value="yes" onChange={onChange} className="mr-1 mt-6" />
            Yes
          </label>
          <label>
            <input type="radio" name={name} value="no" onChange={onChange} className="mr-1 mt-6" />
            No
          </label>
        </div>
      ) : (
        <input
          type={type}
          name={name}
          onChange={onChange}
          required={required}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
    </>
  );
};

export default InputForm;
