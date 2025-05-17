'use client';

import Image from 'next/image';

const styles = [
  {
    id: 1,
    label: 'Casual',
    img: 'https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747453032/browse1_n0ossb.png',
  },
  {
    id: 2,
    label: 'Formal',
    img: 'https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747453033/brows2_p266qk.png',
  },
  {
    id: 2,
    label: 'Party',
    img: 'https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747453033/browse_3_jtu3zl.png',
  },
  {
    id: 1,
    label: 'Gym',
    img: 'https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747453033/browse4_ywvroz.png',
  },
];

export default function Browse() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="bg-[#F0F0F0] rounded-2xl p-4 md:p-10 w-full max-w-xs md:max-w-4xl">
        <h2 className="text-center text-xl md:text-3xl font-integralcf font-bold mb-4 md:mb-8 tracking-tight text-black">
          BROWSE BY<br className="md:hidden" /> DRESS STYLE
        </h2>

       
        <div className="flex flex-col gap-3 md:hidden">
          {styles.map((style) => (
            <div
              key={style.label}
              className={`flex items-center  bg-white rounded-xl overflow-hidden px-2 py-2`}
            >
              <div className="flex-1 text-base font-satoshi font-extrabold pl-2 text-black">
                {style.label}
              </div>
              <div className="relative w-28 h-16">
                <Image
                  src={style.img}
                  alt={style.label}
                  fill
                  className="object-cover object-center rounded-xl"
                  sizes="112px"
                  priority
                />
              </div>
            </div>
          ))}
        </div>

        
        <div className="hidden md:grid md:grid-cols-2 md:grid-rows-2 gap-6 ">
          {styles.map((style) => (
            <div
              key={style.label}
              className="bg-white rounded-xl flex flex-col justify-between overflow-hidden relative min-h-[140px]"
            >
              <div className="absolute top-3 left-4 text-base font-satoshi font-bold z-10 text-black">
                {style.label}
              </div>
              <div className="relative w-full h-32">
                <Image
                  src={style.img}
                  alt={style.label}
                  fill
                  className="object-cover object-center rounded-xl"
                  sizes="(max-width: 1024px) 50vw, 200px"
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
