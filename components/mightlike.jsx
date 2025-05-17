'use client';

import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Polo with Contrast Trims',
    price: '$212',
    oldPrice: "$242",
    discount: "-20%",
    rating: 4.0,
    ratingStars: ['full', 'full', 'full', 'full',],
    image: 'https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747507897/mightlk1_pk4x6d.png',
  },
  {
    id: 2,
    name: 'Gradient Graphic T-shirt',
    price: '$145',
    oldPrice: null,
    discount: null,
    rating: 3.5,
    ratingStars: ['full', 'full', 'full', 'half'],
    image: 'https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747507895/mightlk2_roowtq.png',
  },
  {
    id: 3,
    name: 'Polo with Tipping Details',
    price: '$180',
    oldPrice: null,
    discount: null,
    rating: 4.5,
    ratingStars: ['full', 'full', 'full', 'full', 'half'],
    image: 'https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747507900/mightlk3_im9cda.png',
  },
  {
    id: 4,
    name: 'Black Striped T-shirt',
    price: '$120',
    oldPrice: '$150',
    discount: '-30%',
    rating: 5.0,
    ratingStars: ['full', 'full', 'full', 'full', 'full'],
    image: 'https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747507896/mightlk4_wl9jun.png',
  },
];

const StarRating = ({ stars, rating }) => {
  const starIcons = {
    full: 'https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747396145/Star_acdpqs.svg',
    half: 'https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747396145/HalfStar_qpg4sh.svg',
  };

  return (
    <div className="flex items-center gap-[2px]">
      {stars.map((type, i) => (
        <Image
          key={i}
          src={starIcons[type]}
          alt={`${type} star`}
          width={type === 'full' ? 16 : 8}
          height={16}
          className="rounded-full"
        />
      ))}
      <span className="ml-2 text-sm font-medium text-gray-700">{rating}/5</span>
    </div>
  );
};

export default function MightLike() {
  return (
    <div className="w-full py-10 px-4 md:px-12 font-satoshi">
      <h2 className="text-center text-3xl md:text-4xl font-bold font-integralcf mb-6">
        NEW ARRIVALS
      </h2>

      <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white flex-shrink-0 md:flex-shrink rounded-xl p-4 w-[calc(50%-0.5rem)] md:w-full max-w-[250px] flex flex-col items-center"
          >
            <div className="relative w-[180px] h-[220px] mb-4 rounded-xl overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain rounded-xl"
                priority
              />
            </div>
            <p className="text-sm text-gray-800 font-satoshi font-medium text-center">{product.name}</p>
            <div className="flex items-center justify-center mt-1">
              <StarRating stars={product.ratingStars} rating={product.rating} />
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-black font-bold">{product.price}</span>
              {product.oldPrice && (
                <span className="text-sm line-through text-[rgba(0,0,0,0.40)]]">{product.oldPrice}</span>
              )}
              {product.discount && (
                <span className="text-xs bg-[rgba(255,51,51,0.10)] text-[#FF3333] px-2 py-[2px] rounded-full font-medium font-satoshi">
                  {product.discount}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button className="border border-black rounded-full px-6 py-2 text-sm font-medium hover:bg-black hover:text-white transition">
          View All
        </button>
      </div>
      
    </div>
  );
}
