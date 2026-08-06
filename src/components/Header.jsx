import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";

const Header = ({fixed}) => {
  return (
    <div>
      <div className={`${fixed?"fixed top-0 right-0 left-0":""} imageheader flex justify-between px-32 left-0 right-0 top-0 w-full py-3 z-50 bg-[#FFFFFF] items-center border shadow-[0_10_15px_rgba(0,0,0,0.8)]`}>
        <div className="cursor-pointer">
          <IoSearch className="text-xl" />
        </div>
        <div className="w-full flex justify-center">
          <img className="cursor-pointer w-52 h-12 object-cover pl-3 blur-[0.4px]" src="bhatbhateni.webp" alt="" />
        </div>
        <div className="cursor-pointer">
          <MdOutlineShoppingBag className="text-2xl" />
        </div>
      </div>
<div className={`flex justify-center items-center ${fixed?"mt-20":""}`}>
<ul className="flex text-black m-0 text-sm cursor-pointer">
<li className="p-3">Home</li>
<li className="p-3">All Products</li>
<li className="p-3">Latest Products</li>
<li className="p-3"><select name="" id="">
<option value="">Categories</option>
<option value=""></option>
</select></li>
</ul>
</div>
    </div>
  );
};

export default Header;
