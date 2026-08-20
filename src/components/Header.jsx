import React from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMenu } from "react-icons/io5";


const Header = ({fixed}) => {
  return (
    <div>
      <div className={`${fixed?"fixed top-0 right-0 left-0":""} imageheader flex justify-between px-4 md:px-8! lg:px-32! left-0 right-0 top-0 w-full py-3 z-50 bg-[#FFFFFF] items-center shadow-[0_1px_5px_rgba(0,0,0,0.1)]`}>
        <div className="cursor-pointer">
          <IoSearch className="text-xl" />
        </div>
        <div className="w-full flex justify-center">
          <img className="cursor-pointer w-35  h-9 object-fill md:w-52 md:h-12 md:object-cover pl-3 md:blur-[0.4px]" src="bhatbhateni.webp" alt="" />
        </div>
        <div className="cursor-pointer flex items-center">
          <span><MdOutlineShoppingBag className="text-2xl" /></span>
<span className="md:hidden text-2xl ml-3 cursor-pointer mt-0.5"><IoMenu />
</span>
        </div>
      </div>
<div className={`justify-center items-center ${fixed?"mt-20":""} hidden md:flex`}>
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
