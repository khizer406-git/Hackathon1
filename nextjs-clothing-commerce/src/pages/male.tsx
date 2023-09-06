'use client'

import React, { useEffect } from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import images from './data'
import { useSelector} from 'react-redux';
import { useState } from 'react';
import { useRouter } from 'next/router';

const male = () => {

const [currentIndex, setCurrentIndex] = useState(0);
const [length,setlength] = useState(0);
const [data,setData] = useState(images);
const search = useSelector((state:any) => state.search);
const router = useRouter();

useEffect(() => {
  console.log(search);
  setData(()=>images)
  setData((prevData) => {
    const newData = [...prevData]; 
    if (search && prevData) {
      return newData.filter((data) =>
        data.Name.toLowerCase().includes(search)
      );
    }
    return images; 
  });
}, [search]);

  const navigateToDestination = (name:string,src:string,price:number) => {
    router.push({
      pathname: '/ViewProduct',
      query: {
        name: name,
        src: src,
        price: price,
      },
    });
  };

useEffect(()=>{
  setlength(data.filter(image => image.gender === 'male').length);
},[data])

const prevImage = () => {
  setCurrentIndex((prevIndex) => Math.max(prevIndex - 4, 0));
};

const nextImage = () => {
  setCurrentIndex((prevIndex) => Math.min(prevIndex + 4, length - 4));
};


  return (
    <div className="my-14 mx-24" >
      <Navbar />
        <div className="flex flex-col items-center justify-center my-20 ">
        <div className="flex items-center space-x-4">
        <button
            onClick={prevImage}
            disabled={currentIndex === 0}
            className={`px-4 py-2 mr-2 ${currentIndex === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'} rounded`}
            >
            &#8249;
            </button>
            {data.filter(image => image.gender === 'male').slice(currentIndex, currentIndex + 4).map((image, index) => (
            <div className="w-full h-full transition-transform transform-gpu hover:scale-110" key={index}
            onClick={()=>{navigateToDestination(image.Name,image.src,image.Price)}}>
            <img
                key={index}
                src={image.src}
                alt={`Image ${currentIndex + index + 1}`}
            />
            <div className='font-bold'>{image.Name}</div>
            <div className='font-bold'>${image.Price}</div>
            </div>
            ))}
            <button
            onClick={nextImage}
            disabled={currentIndex + 4 >= length}
            className={`px-4 py-2 ${currentIndex + 4 >= length ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'} rounded`}
            >
            &#8250;
            </button>
        </div>
        <div className="flex mt-4">
        </div>
        </div>
      <Footer />
    </div>
  )
}

export default male;