'use client';

import Image from 'next/image';

const FooterComp = () => {
  return (
    <footer className="bg-[#F0F0F0] pt-10 pb-0 px-4 md:px-0 mt-30">
      <div className="max-w-6xl mx-auto w-full">
        <div className="bg-black rounded-2xl p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10 -mt-16 md:-mt-20 mb-8 md:mb-14 shadow-lg">
          <div className="text-white text-2xl font-integralcf md:text-3xl font-bold leading-tight text-center md:text-left">
            STAY UPTO DATE ABOUT<br className="hidden md:block" /> OUR LATEST OFFERS
          </div>
          <div className="flex flex-col gap-3 w-full md:w-[400px]">
            <div className="flex items-center bg-white rounded-full px-4 py-2">
              <Image
                src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747419310/Email_jdopzj.svg"
                alt="Email Icon"
                width={20}
                height={20}
                className="mr-2"
              />
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent outline-none text-sm text-black placeholder-gray-500"
              />
            </div>
            <button className="bg-white font-satoshi text-black rounded-full px-4 py-2 font-semibold text-sm hover:bg-gray-200 transition">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          
          <div className="flex flex-col items-start md:w-[220px]">
            <div className="font-black font-integralcf text-2xl mb-2 tracking-tight">SHOP.CO</div>
            <p className="text-sm font-satoshi text-gray-600 mb-4">
              We have clothes that suits your style and which you're proud to wear. From women to men.
            </p>
            <div className="flex">
              <Image
                src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747419217/Social_rvo9n8.svg"
                alt="Facebook"
                width={148}
                height={28}
              />
            </div>
          </div>

          
          <div className="grid font-satoshi grid-cols-2 sm:grid-cols-4 gap-6 flex-1">
            <div>
              <div className="font-semibold mb-3 text-gray-800">COMPANY</div>
              <ul className="space-y-2 text-sm text-[rgba(0,0,0,0.60)]">
                <li><a href="#">About</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Career</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3 text-gray-800">HELP</div>
              <ul className="space-y-2 text-sm text-[rgba(0,0,0,0.60)]">
                <li><a href="#">Customer Support</a></li>
                <li><a href="#">Delivery Details</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3 text-gray-800">FAQ</div>
              <ul className="space-y-2 text-sm text-[rgba(0,0,0,0.60)]">
                <li><a href="#">Account</a></li>
                <li><a href="#">Manage Deliveries</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Payments</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-3 text-gray-800">RESOURCES</div>
              <ul className="space-y-2 text-sm text-[rgba(0,0,0,0.60)]">
                <li><a href="#">Free eBooks</a></li>
                <li><a href="#">Development Tutorial</a></li>
                <li><a href="#">How to - Blog</a></li>
                <li><a href="#">Youtube Playlist</a></li>
              </ul>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-t border-gray-200 mt-10 pt-6 pb-4">
          <div className="text-xs text-[rgba(0,0,0,0.60)] mb-4 md:mb-0 font-satoshi">
            Shop.co © 2000-2023. All Rights Reserved
          </div>
          <div className="flex gap-2">
            <Image
              src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747419204/Visa_o1bd04.svg"
              alt="VISA"
              width={46}
              height={30}
              className="bg-white rounded object-contain"
            />
            <Image
              src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747419238/MasterCard_yy6rrp.svg"
              alt="Mastercard"
              width={46}
              height={30}
              className="bg-white rounded object-contain"
            />
            <Image
              src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747419249/Paypal_pn5xgb.svg"
              alt="PayPal"
              width={46}
              height={30}
              className="bg-white rounded object-contain"
            />
            <Image
              src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747419272/ApplePay_luvjxe.svg"
              alt="Apple Pay"
              width={46}
              height={30}
              className="bg-white rounded object-contain"
            />
            <Image
              src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747419309/Gpay_qjhzav.svg"
              alt="Google Pay"
              width={46}
              height={30}
              className="bg-white rounded object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
