"use client";
import { useState } from 'react';
import Image from 'next/image';
const icons = {
  plus: 'https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747487395/plus_mdcr2p.svg',
  minus: 'https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747487396/minus_c8eh92.svg'
};

export default function ProductDescription() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('olive');
  const [selectedSize, setSelectedSize] = useState('Large');
  
  const colors = [
    { id: 'olive', src: 'https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747485689/oliveellipse_j9qhgw.svg', label: 'Olive green' },
    { id: 'green', src: 'https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747485689/greenellipse_nvwvm9.svg', label: 'Forest green' },
    { id: 'navy', src: 'https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747485690/blueellipse_jscwce.svg', label: 'Navy blue' },
  ];
  
  const sizes = ['Small', 'Medium', 'Large', 'X-Large'];

  const handleImageId = (idx) => {
    if(idx === 1) {
      return 'https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747485689/prod2_oaloz9.png';
    }
    else if(idx === 2) {  
      return 'https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747485697/prod3_nhtduu.png';
    }
    else if(idx === 3) {
      return 'https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747485700/prod4_lzbvd1.png';
    }
  }
  
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="max-w-7xl font-satoshi mx-auto mt-5">
     
      <div className="flex items-center text-sm text-gray-500 space-x-2 mb-4 px-4 md:px-0">
        <span>Home</span>
        <span>›</span>
        <span>Shop</span>
        <span>›</span>
        <span>Men</span>
        <span>›</span>
        <span>T-shirts</span>
      </div>

      
      <div className="flex flex-col md:flex-row md:space-x-8">
        
        
        <div className="md:w-1/3 mb-6 md:mb-0">
          
          <div className="bg-gray-100 rounded-lg mb-2">
            <Image 
              src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747485699/prod1_qazg9p.png" 
              alt="ONE LIFE Graphic T-Shirt" 
              width={500} 
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          
          
          <div className="flex space-x-2">
            {[1, 2, 3].map((idx) => (
              <div 
                key={idx} 
                className={`w-1/3 bg-gray-100 ${idx === 1 ? 'border-black' : 'border-gray-200'} rounded-lg overflow-hidden`}
              >
                <Image
                  src={`${handleImageId(idx)}`}
                  alt={`Product thumbnail ${idx}`}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        
       
        <div className="md:w-1/2 px-4 md:px-0">
          <h1 className="text-2xl font-bold font-integralcf mb-2">ONE LIFE GRAPHIC T SHIRT</h1>
          
          
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400">
              {[1, 2, 3, 4].map((index) => (
                <Image
                  key={`star-${index}`}
                  src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747396145/Star_acdpqs.svg"
                  alt="Full star"
                  width={16}
                  height={16}
                  className="text-yellow-400"
                />
              ))}
              <Image
                src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747396145/HalfStar_qpg4sh.svg"
                alt="Half star"
                width={8}
                height={16}
                className="text-yellow-400"
              />
            </div>
            <span className="text-gray-500 text-sm ml-1">4.5/5</span>
          </div>
          
          
          <div className="mb-4">
            <span className="text-xl font-bold mr-2">$260</span>
            <span className="text-gray-400 line-through">$300</span>
            <span className="ml-2 text-sm bg-red-100 text-red-600 px-2 py-0.5 rounded">-40%</span>
          </div>
          
          
          <p className="text-gray-600 mb-6">
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>
          
         
          <div className="mb-6">
            <p className="font-medium mb-2">Select Colors</p>
            <div className="flex space-x-2">
              {colors.map(color => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedColor === color.id ? 'ring-2 ring-offset-2 ring-black' : ''}`}
                  aria-label={`Select ${color.label} color`}
                >
                  <Image
                    src={color.src}
                    alt={color.label}
                    width={32}
                    height={32}
                    className="w-full h-full rounded-full"
                  />
                  {selectedColor === color.id && (
                    <div className="absolute w-2 h-2 bg-white rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
          
        
          <div className="mb-6">
            <p className="font-medium mb-2">Choose Size</p>
            <div className="flex space-x-2">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-full text-sm ${
                    selectedSize === size 
                      ? 'bg-black text-white border-black' 
                      : 'bg-white text-gray-800 border-gray-300'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          
          
          <div className="flex space-x-4">
            <div className="flex items-center border border-gray-300 rounded-full">
              <button 
                onClick={decreaseQuantity}
                className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black"
                aria-label="Decrease quantity"
              >
                <Image src={icons.minus} alt="Minus" width={24} height={24} />

              </button>
              <span className="w-8 text-center">{quantity}</span>
              <button 
                onClick={increaseQuantity}
                className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black"
                aria-label="Increase quantity"
              >
                <Image src={icons.plus} alt="Plus" width={24} height={24} />
              </button>
            </div>
            
            <button className="flex-grow bg-black text-white py-3 px-6 rounded-full font-medium hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}