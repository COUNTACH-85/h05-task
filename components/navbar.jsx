'use client';
import Image from "next/image";
import Link from 'next/link'; 

export default function Navbar() {
  return (
    <nav className="w-full px-4 py-3 flex justify-between items-center border-b">
      <div className="flex items-center gap-6">
        <button className="md:hidden text-2xl">
          <Image src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747310633/hamburger_hpfcqr.svg" width={24} height={24} alt="Hamburger" />
        </button>

        <h1 className="font-extrabold font-integralcf text-xl tracking-wide">SHOP.CO</h1>

        
        <div className="hidden md:flex gap-6 text-sm text-black">
          <Link href="/product" className="cursor-pointer flex flex-row items-center">
          Shop
            <Image
              src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747330398/Dropdown_vcvnzf.svg"
              width={16}
              height={16}
              alt="Dropdown"
          />
          </Link>
          <span className="cursor-pointer">On Sale</span>
          <span className="cursor-pointer">New Arrivals</span>
          <span className="cursor-pointer">Brands</span>
        </div>
      </div>

      
      <div className="hidden md:flex flex-1 mx-6 max-w-md">
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full w-full">
          <Image src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747310637/search_Icon_vhfpql.svg" width={24} height={24} alt="Search Icon" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>
      </div>

      
      <div className="flex items-center gap-5 text-xl">
        <button className="md:hidden">
          <Image src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747330784/blacksearch_hmxo7g.svg" width={24} height={24} alt="Search Icon" />
        </button>
        <Image src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747310635/cart_umntdm.svg" width={24} height={24} alt="Cart" />
        <Image src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747310635/acc_v5ule3.svg" width={24} height={24} alt="Account" />
      </div>
    </nav>
  );
}