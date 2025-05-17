import Image from 'next/image';

const HeroSection = () => {
  return (   
    <div className="relative w-screen h-150 bg-white overflow-hidden">
      <Image
        src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747310636/heroimage_nafp0u.jpg"
        alt="Hero"
        fill
        className="object-cover object-[30%_25%] "
        priority
      />
      <div className="absolute z-10 left-10 top-1/5 max-w-xl text-black">
        <h1 className="text-6xl font-black font-integralcf leading-tight">
          FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
        </h1>
        <p className="mt-4 text-[rgba(0,_0,_0,_0.60)] font-satoshi">
          Browse through our diverse range of meticulously crafted garments, designed
          to bring out your individuality and cater to your sense of style.
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-full font-satoshi">
          Shop Now
        </button>

        <div className="mt-10 flex space-x-10 text-black">
          <div>
            <p className="text-2xl font-satoshi-700">200+</p>
            <p className="text-sm font-satoshi text-[rgba(0,_0,_0,_0.60)]">International Brands</p>
          </div>
          <div>
            <p className="text-2xl font-satoshi-700">2,000+</p>
            <p className="text-sm font-satoshi text-[rgba(0,_0,_0,_0.60)]">High-Quality Products</p>
          </div>
          <div>
            <p className="text-2xl font-satoshi-700">30,000+</p>
            <p className="text-sm font-satoshi text-[rgba(0,_0,_0,_0.60)]">Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="absolute right-10 top-20 z-0">
        <Image
          src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747310633/bigstar_ka3oad.svg" 
          alt="Decorative"
          width={104}
          height={104}
        />
        </div>
        <div className="absolute right-150 top-60 z-0">
        <Image
          src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747310633/small_star_iu4fsa.svg"
          alt="Decorative"
          width={56}
          height={56}
        />
      </div>
    </div>

  );
}

export default HeroSection;