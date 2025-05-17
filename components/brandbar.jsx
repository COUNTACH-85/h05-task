import Image from 'next/image';

const BrandBar = () => {
  return (

    <div className='w-screen h-[7rem] bg-black grid sm:grid-cols-5 grid-cols-3 gap-4'>
        <div className='flex items-center justify-center'>
            <Image src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747310635/versace_wpzgot.svg" width={120} height={120} alt="Brand 1" />
        </div>
        <div className='flex items-center justify-center'>
            <Image src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747310635/zara_tifzok.svg" width={120} height={120} alt="Brand 2" />
        </div>
        <div className='flex items-center justify-center'>
            <Image src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747310635/gucci_hggpxu.svg" width={120} height={120} alt="Brand 3" />
        </div>
        <div className='flex items-center justify-center'>
            <Image src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747310633/prada_lwaway.svg" width={120} height={120} alt="Brand 4" />
        </div>
        <div className='flex items-center justify-center'>
            <Image src="https://res.cloudinary.com/dn0fpl7ks/image/upload/v1747310633/calvin-klein_oviymd.svg" width={120} height={120} alt="Brand 5" />
        </div>
    </div>

  );
}

export default BrandBar;