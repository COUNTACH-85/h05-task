import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-[#F2F0F1] font-satoshi w-full">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse lg:flex-row items-center justify-between relative">
        
        <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">
          <div className="flex items-start justify-center lg:justify-start">
            
            <h1 className="text-4xl md:text-6xl font-black font-integralcf leading-tight">
              FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
            </h1>
          </div>
          <p className="mt-4 text-gray-600 text-base max-w-md mx-auto lg:mx-0">
            Browse through our diverse range of meticulously crafted garments, designed
            to bring out your individuality and cater to your sense of style.
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white rounded-full">
            Shop Now
          </button>

          
          <div className="mt-10 flex flex-col sm:flex-row sm:justify-start sm:space-x-10 space-y-6 sm:space-y-0 text-black">
            <div className="text-center sm:text-left">
              <p className="text-2xl font-bold">200+</p>
              <p className="text-sm text-gray-600">International Brands</p>
            </div>
            <div className='bg-[rgba(0,_0,_0,_0.10)] h-15 w-0.5 rounded-xl max-sm:hidden'></div>
            <div className="text-center sm:text-left">
              <p className="text-2xl font-bold">2,000+</p>
              <p className="text-sm text-gray-600">High-Quality Products</p>
            </div>
            <div className='bg-[rgba(0,_0,_0,_0.10)] h-15 w-0.5 rounded-xl max-sm:hidden'></div>
            <div className="text-center sm:text-left">
              <p className="text-2xl font-bold">30,000+</p>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
          </div>
        </div>
      <div className="relative z-0 h-[700px] w-full ">
        <Image
          src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747310636/heroimage_nafp0u.jpg"
          alt="Hero"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

        
        <div className="absolute top-[10%] max-sm:scale-75 left-4 md:top-[35%] md:left-[calc(30%+200px)]">
          <Image
            src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747310633/small_star_iu4fsa.svg"
            alt="Decorative Star"
            width={56}
            height={56}
          />
        </div>
        <div className="absolute top-[3%] max-sm:scale-75 right-2 md:top-[12%] md:left-[calc(50%+450px)]">
          <Image
              src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747310633/bigstar_ka3oad.svg"
              alt="Decorative Star"
              width={104}
              height={104}
              className="mr-2 mt-2 "
            />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
