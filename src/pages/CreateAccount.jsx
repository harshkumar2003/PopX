import React, { useState , useEffect } from "react";
import Button from "../components/Button";
import InputForm from "../components/InputForm";
import { useNavigate } from "react-router-dom";


const CreateAccount = () => {
  useEffect(()=>
  {
    document.title = "Sign Up | PopX"
  })
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.email.trim()) newErrors.email = "Email address is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    if (!formData.agency.trim()) newErrors.agency = "Please select an option";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    
    console.log("Account Created Successfully!");
    navigate("/account");
  };

  return (
    <div className="h-screen flex flex-col justify-between p-4 bg-[#F7F8F9]">
      <div>
        <h1 className="text-2xl font-bold ml-4 mt-8">
          Create your <br /> PopX Account
        </h1>
      </div>
      <div className="space-y-4 mt-4 p-3">
        <div className="relative w-full">
          <InputForm lname="Name"  assetrix="*" type="text" name="name" onChange={handleChange} required={true}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="relative w-full">
          <InputForm  lname="Phone Number"  assetrix="*" type="tel"  name="phone"  onChange={handleChange}  required={true}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
        <div className="relative w-full">
          <InputForm  lname="Email address" assetrix="*"  type="email"  name="email"  onChange={handleChange}  required={true}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="relative w-full">
          <InputForm lname="Password"  assetrix="*"  type="password"  name="password"  onChange={handleChange}  required={true}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <div className="relative w-full">
          <InputForm  lname="Company Name"  type="text"  name="company"  onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <div className="relative w-full mt-2">
          <InputForm  lname="Are you an Agency?"  assetrix="*"  type="radio"  name="agency"  onChange={handleChange}  required={true}
          />
          {errors.agency && <p className="text-red-500 text-sm">{errors.agency}</p>}
        </div>
      </div>
      <div className="mt-auto w-full">
        <Button  text="Create Account"  bgColor="bg-[#6C25FF]" tcolor="text-white"  onClick={handleSubmit}  />
      </div>
    </div>
  );
};

export default CreateAccount;
