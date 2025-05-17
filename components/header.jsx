import Image from 'next/image';

const HeaderRibbon = () => {
  return (
    <div className="inline-flex font-satoshi h-[2.5rem] w-screen py-[0.5625rem] justify-center items-center gap-x-2 flex-shrink-0 bg-black">
      <div className="text-white font-satoshi text-[0.875rem] not-italic font-normal leading-normal">
        Sign up and get 20% off to your first order.
      </div>
      <div className="text-white font-satoshi text-[0.875rem] not-italic font-medium leading-normal underline">
        Sign Up Now
      </div>
      <div className='absolute right-[6.25rem] max-md:hidden'><Image src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747310637/cross_ycbehw.svg" width={20} height={20} alt="Cross Icon" /></div>
    </div>

  );
}

export default HeaderRibbon;