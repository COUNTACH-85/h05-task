'use client';

import { useRef } from 'react';
import Image from 'next/image';

const reviews = [
  {
    name: 'Sarah M.',
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: 'Alex K.',
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: 'James L.',
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    name: 'Moore P.',
    text: "Shop.co never disappoints! The quality, fit, and style are always consistent. I appreciate the attention to detail and the excellent customer service.",
  },
];

export default function Chats() {
  const scrollRef = useRef(null);

  
  const handleScroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = container.firstChild?.offsetWidth || 320;
    container.scrollBy({ left: dir === 'left' ? -cardWidth - 24 : cardWidth + 24, behavior: 'smooth' });
  };

  return (
    <section className="w-full bg-white py-8 px-2 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 md:mb-10">
          <h2 className="text-2xl md:text-4xl font-black tracking-tight text-black font-integralcf">
            OUR HAPPY<br className="md:hidden" /> CUSTOMERS
          </h2>
          <div className="flex gap-2 md:gap-3">
            <button
              aria-label="Scroll left"
              onClick={() => handleScroll('left')}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-black bg-white hover:bg-[#F0F0F0] transition"
            >
              <Image
                src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747476188/leftarrow_oeybio.svg"
                alt="Left Arrow"
                width={20}
                height={20}
              />
            </button>
            <button
              aria-label="Scroll right"
              onClick={() => handleScroll('right')}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-black bg-white hover:bg-[#F0F0F0] transition"
            >
              <Image
                src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747476188/rightarrow_gu85qc.svg"
                alt="Right Arrow"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute top-0 left-0 h-full w-8 z-10 hidden sm:block"
            style={{
              background: 'linear-gradient(to right, white 60%, transparent 100%)'
            }}
          />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-8 z-10 hidden sm:block"
            style={{
              background: 'linear-gradient(to left, white 60%, transparent 100%)'
            }}
          />
          <div
            ref={scrollRef}
            className="
              flex gap-6 overflow-x-auto scroll-smooth no-scrollbar
              py-2
              "
            style={{
              WebkitMaskImage:
                'linear-gradient(to right, transparent 0, black 32px, black calc(100% - 32px), transparent 100%)',
              maskImage:
                'linear-gradient(to right, transparent 0, black 32px, black calc(100% - 32px), transparent 100%)',
            }}
          >
            {reviews.map((review) => (
              <div
                key={review.name}
                className="
                  bg-white border border-[#F0F0F0] rounded-2xl
                  min-w-[320px] max-w-[370px] flex-shrink-0
                  p-5 md:p-7 shadow-sm
                "
              >
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747396145/Star_acdpqs.svg"
                      alt="Star"
                      width={20}
                      height={20}
                    />
                  ))}
                </div>
                <div className="flex items-center mb-2">
                  <span className="font-bold font-satoshi text-black mr-2">{review.name}</span>
                  <Image
                    src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747476189/greentick_y7384x.svg"
                    alt="Verified"
                    width={16}
                    height={16}
                  />
                </div>
                <p className="text-sm font-satoshi text-gray-600 leading-relaxed">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
