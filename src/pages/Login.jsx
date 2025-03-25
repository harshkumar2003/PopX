import React, { useState , useEffect } from "react";
import Button from "../components/Button";
import InputForm from "../components/InputForm";
import { useNavigate } from "react-router-dom";


const Login = () => {
  useEffect(()=>
    {
      document.title = "Login | PopX"
    })
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    let newErrors = {};
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Login Successful!");
    navigate("/account");
  };

  return (
    <div className="max-w-md w-full mx-auto h-screen flex flex-col justify-between p-4 bg-[#F7F8F9]">
      <div>
        <div className="ml-4">
          <h1 className="text-2xl font-bold mt-8">Sign in to your <br />PopX Account</h1>
          <p className="text-xl pt-[10px] text-[#CDCED0]">
            Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.
          </p>
        </div>
        <div className="space-y-4 mt-4 p-3">
          <div className="relative w-full">
            <InputForm lname="Email address" assetrix="*" type="email" name="email" onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="relative w-full">
            <InputForm  lname="Password"  assetrix="*"  type="password"  name="password"  onChange={handleChange}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
        </div>
      </div>
      <div className="mx-3">
        <Button text="Login" bgColor="bg-[#6C25FF]" tcolor="text-white" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default Login;
