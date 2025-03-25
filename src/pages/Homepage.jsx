import React from 'react'
import Button from '../components/Button'
import {  useNavigate } from 'react-router-dom'
const Homepage=()=> {
    const navigate = useNavigate();
  return (
  
      <div className='h-screen bg-[#F7F8F9]  grid items-end justify-self-center pb-2'>
        <div className=' m-4 space-y-6 '>
        <div className=''>
            <h1 className='text-2xl font-bold'>Welcome to PopX</h1>
            <p className='text-xl pt-[10px] opacity-[0.6] text-[#1D2226]'>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit.</p>
        </div>
        <div className=' space-y-2  '>
            <Button className='text-[16px] font-medium' text="Create Account" bgColor="bg-[#6C25FF]" tcolor="text-white" onClick={()=> navigate("/create-account")}/>
            <Button className='text-[16px] font-medium' text="Already Registered? Login" bgColor="bg-[#CEBAFB]" tcolor="text-[#1D2226]" onClick={()=> navigate("/login")}/>
        </div>
      </div>
      </div>
    
  )
}

export default Homepage
