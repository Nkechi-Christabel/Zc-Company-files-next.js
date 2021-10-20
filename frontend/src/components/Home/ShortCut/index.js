import React from "react";

const index = () => {
  return (
    <div className="w-full px-10 py-12">
      <div className="w-full flex flex-wrap justify-between sm:justify-between">
        <div className="mb-10 md:mb-0">
          <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-[180px] xl:h-[165px] flex justify-around bg-green-50 rounded-md transition-all duration-150 shadow-md">
            <img className="icon" src="/Icons/AllFiles.svg" alt="image icon" className=" w-1/3" />
          </div>
          <div className="mt-5">
            <p className="name text-[18px] text-center">All Files</p>
          </div>
        </div>
        <div className="mb-10 md:mb-0">
          <div className="w-20 h-20 md:w-28 md:h-28  lg:w-32 lg:h-32 xl:w-[180px] xl:h-[165px] flex justify-around bg-green-50 rounded-md transition-all duration-150 shadow-md">
            <img className="icon" src="/Icons/shared.svg" alt="image icon" className=" w-1/3" />
          </div>
          <div className="mt-5">
            <p className="name text-[18px] text-center">Shared</p>
          </div>
        </div>
        <div className="mb-10 md:mb-0">
          <div className="w-20 h-20 md:w-28 md:h-28  lg:w-32 lg:h-32 xl:w-[180px] xl:h-[165px] flex justify-around bg-green-50 rounded-md transition-all duration-150 shadow-md">
            <img className="icon" src="/Icons/starred.svg" alt="image icon" className=" w-1/3" />
          </div>
          <div className="mt-5">
            <p className="name text-[18px] text-center">Starred</p>
          </div>
        </div>
        <div className="mb-10 md:mb-0">
          <div className="w-20 h-20 md:w-28 md:h-28  lg:w-32 lg:h-32 xl:w-[180px] xl:h-[165px] flex justify-around bg-green-50 rounded-md transition-all duration-150 shadow-md">
            <img className="icon" src="/Icons/homeTrash.svg" alt="image icon" className=" w-1/3" />
          </div>
          <div className="mt-5">
            <p className="name text-[18px] text-center">Trash</p>
          </div>
        </div>
        <div className="mb-10 md:mb-0">
          <div className="w-20 h-20 md:w-28 md:h-28  lg:w-32 lg:h-32 xl:w-[180px] xl:h-[165px] flex justify-around bg-green-50 rounded-md transition-all duration-150 shadow-md">
            <img className="icon" src="/Icons/Help.svg" alt="image icon" className=" w-1/3" />
          </div>
          <div className="mt-5">
            <p className="name text-[18px] text-center">Help</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
