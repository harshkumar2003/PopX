import {useEffect} from "react";
import profile from "../assets/Ellipse 114@2x.png";
import camera from "../assets/Group 1585.svg";
const Account = () => {
  useEffect(()=>
    {
      document.title = "Account | PopX"
    })
  return (
    
    <>
      <div className="bg-white ">
        <div className="h-[68px] bg-[#FFFFFF]">
          <h1 className="pl-[15px] pt-[25px] text-[18px] capitalize">Account Settings</h1>
        </div>
        <div className="bg-[#F7F8F9] h-screen">
          <div className="  flex gap-10">
            <div className="">
              <img  src={profile} alt="" width="76px"  height="76px"  className="ml-[20px] mt-[30px]"
              />
              <img  src={camera}  alt=""  width="21px"  height="23px"  className="relative left-[79px] bottom-[27px]"
              />
            </div>
            <div className="mt-[30px]">
              <h1 className="font-medium">Marry Doe</h1>
              <h1 className="font-medium">Marry@Gmail.Com</h1>
            </div>
          </div>
          <div className="mt-[15px]  ">
            <p className=" text-left text-[14px] leading-[22px] font-rubik text-[#1D2226] capitalize opacity-100 px-4">
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>

          <hr class="border-t-2 border-dashed border-gray-400 my-[20px]" />

          <div className="relative top-[300px]">
                <hr class=" border-t-2 border-dashed border-gray-400 " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
