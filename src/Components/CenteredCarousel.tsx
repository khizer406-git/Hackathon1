'use client'

import { useState } from 'react';

  const images = [
    {
        Name: 'Shirt',
        Price: 200,
        src: '/pic1.png',
    },
    {
        Name: 'Shalwar Qameez',
        Price: 300,
        src: '/pic2.png',
    },
    {
        Name: 'Cameron Sash Tie Dress',
        Price: 300,
        src: '/pic3.png',
    },
    {
        Name: 'Shalwar Qameez',
        Price: 300,
        src: '/pic2.png',
    },
    {
        Name: 'Cameron Sash Tie Dress',
        Price: 300,
        src: '/pic3.png',
    },
    {
        Name: 'Shirt',
        Price: 200,
        src: '/pic1.png',
    },
  ]

function CenteredCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 3, images.length - 3));
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 ">
      <div className="flex items-center space-x-4">
      <button
          onClick={prevImage}
          disabled={currentIndex === 0}
          className={`px-4 py-2 mr-2 ${currentIndex === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'} rounded`}
        >
          &#8249;
        </button>
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <div className="w-full h-full transition-transform transform-gpu hover:scale-110" key={index}>
          <img
            key={index}
            src={image.src}
            alt={`Image ${currentIndex + index + 1}`}
            // className="w-full h-full transition-transform transform-gpu hover:scale-110"
          />
          <div className='font-bold'>{image.Name}</div>
          <div className='font-bold'>${image.Price}</div>
          </div>
        ))}
        <button
          onClick={nextImage}
          disabled={currentIndex + 3 >= images.length}
          className={`px-4 py-2 ${currentIndex + 3 >= images.length ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'} rounded`}
        >
          &#8250;
        </button>
      </div>
      <div className="flex mt-4">
        
        
      </div>
    </div>
  );
}

export default CenteredCarousel;
