
'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function ProductReviews() {
  const [activeTab, setActiveTab] = useState('reviews');
  const [sortBy, setSortBy] = useState('Latest');

  const reviews = [
    {
      id: 1,
      author: 'Samantha D.',
      rating: 4.5,
      date: 'August 14, 2023',
      content: 'I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt.',
      verified: true
    },
    {
      id: 2,
      author: 'Alex M.',
      rating: 5,
      date: 'August 15, 2023',
      content: 'The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.',
      verified: true
    },
    {
      id: 3,
      author: 'Ethan R.',
      rating: 4.5,
      date: 'August 16, 2023',
      content: 'This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer\'s touch in every aspect of this shirt.',
      verified: true
    },
    {
      id: 4,
      author: 'Olivia P.',
      rating: 4,
      date: 'August 17, 2023',
      content: 'As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It\'s evident that the designer poured their creativity into making this t-shirt stand out.',
      verified: true
    },
    {
      id: 5,
      author: 'Liam K.',
      rating: 5,
      date: 'August 18, 2023',
      content: 'This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer\'s skill. It\'s like wearing a piece of art that reflects my passion for both design and fashion.',
      verified: true
    },
    {
      id: 6,
      author: 'Ava H.',
      rating: 5,
      date: 'August 19, 2023',
      content: 'I\'m not just wearing a t-shirt; I\'m wearing a piece of design philosophy. The vibrant colors and thoughtful layout of the design make this shirt a conversation starter.',
      verified: true
    }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Image
          key={`full-${i}`}
          src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747396145/Star_acdpqs.svg"
          alt="Full star"
          width={16}
          height={16}
        />
      );
    }

    if (halfStar) {
      stars.push(
        <Image
          key="half"
          src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747396145/HalfStar_qpg4sh.svg"
          alt="Half star"
          width={8}
          height={16}
        />
      );
    }

    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="max-w-7xl mx-auto font-[Satoshi] mt-3">
      
      <div className="border-b border-gray-200">
        <div className="flex text-sm md:text-base justify-center md:gap-16 gap-6">
          {['details', 'reviews', 'faqs'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-4 font-medium ${
                activeTab === tab ? 'border-b-2 border-black' : 'text-gray-500'
              }`}
            >
              {tab === 'details' && 'Product Details'}
              {tab === 'reviews' && 'Rating & Reviews'}
              {tab === 'faqs' && 'FAQs'}
            </button>
          ))}
        </div>
      </div>

      
      <div className="flex items-center justify-between my-6 px-4 md:px-0">
        <h2 className="text-lg font-semibold">
          All Reviews <span className="text-gray-500 text-sm font-normal">({reviews.length})</span>
        </h2>
        <div className="flex items-center space-x-2">
          <button className="md:hidden p-2">
            <Image src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747506920/filter_m5ozmj.svg" alt="Filter" width={24} height={24} />
          </button>
          <div className="hidden md:flex items-center space-x-3">
            <button className="p-2">
              <Image src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747506920/filter_m5ozmj.svg" alt="Filter" width={24} height={24} />
            </button>
            <div className="relative">
              <button className="flex items-center space-x-1 bg-gray-100 px-3 py-1.5 rounded-full text-sm">
                <span>{sortBy}</span>
                <Image src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747506920/blkdropdown_u1x0uy.svg" alt="Chevron Down" width={16} height={16} />
              </button>
            </div>
            <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
              Write a Review
            </button>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex justify-between">
              <div>{renderStars(review.rating)}</div>
              <Image src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747506920/morehr_nqbegw.svg" alt="More options" width={24} height={24} />
            </div>
            <div className="flex items-center mt-2">
              <h3 className="font-medium text-sm md:text-base">{review.author}</h3>
              {review.verified && (
                <div className="ml-2">
                  <Image
                    src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747476189/greentick_y7384x.svg"
                    alt="Verified"
                    width={20}
                    height={20}
                    className="block"
                  />
                </div>
              )}
            </div>
            <p className="mt-3 text-sm text-gray-700">"{review.content}"</p>
            <p className="text-xs text-gray-500 mt-4">Posted on {review.date}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center mb-6">
        <button className="px-6 py-3 border border-gray-300 rounded-3xl text-sm font-medium">
          Load More Reviews
        </button>
      </div>
    </div>
  );
}

