import React from 'react'

const Button = ({text,onClick, tcolor, bgColor,className ="" })=> {
  return (
    <button onClick={onClick} className={`${bgColor ?  bgColor:""} ${tcolor ?  tcolor:""} w-full text-[16px] py-2 font-medium h-[44px] text-center rounded-lg ${className}`}>
        {text}
    </button>
  )
}

export default Button
