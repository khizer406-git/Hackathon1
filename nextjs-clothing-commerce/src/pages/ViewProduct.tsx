import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, subtractItem } from '../redux/actions';
//Apply redux

const ViewProduct = () => {

  const dispatch = useDispatch();
  const router = useRouter();
  const [quantity,setQuantity] = useState(1);
  
  const Product = {
    name : router.query.name || '',
    src  : typeof router.query.src === 'string' ? router.query.src : '',
    price : router.query.price || '',
    quantity : quantity,
  }
  
  const navigateToDestination = () => {
      router.push({
        pathname: '/cart',
        query: {
        name: Product.name,
        src: Product.src,
        price: Product.price,
        quantity: quantity,
        },
    })
  };

  const increment = () => {
    setQuantity(quantity+1);
  }
  
  const decrement = () => {
    if(quantity > 1)
        setQuantity(quantity-1);
  }
  

  return (
    <div className="my-14 mx-24" >
      <Navbar/>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr 4fr 3fr)', gridAutoRows: 'minmax(450px,auto)', }}
      className='mt-6'>
        <div className='mt-10'>
            <Image src={Product.src} alt="Error" width={120} height={100} style={{ display: 'flex' }} />
        </div>
        <div className='my-10' style={{}}>
            <Image src={Product.src} alt="Error" width={500} height={200} style={{ display: 'flex',width:'100%',height:'100%' }} />
        </div>
        <div className="my-10 mr-20 ml-10 pt-12"> 
            <div className='font-bold '>{Product.name}</div>
            <div className='font-bold text-gray-400'>Dress</div>
            <div className='mt-10'>
              <span className='font-bold'>Quantity: </span>
              <button onClick={()=>decrement()} type="button" className='px-2 py-0 bg-gray-300 hover:bg-gray-400 rounded-xl mx-2'>-</button>
              <span>{quantity}</span>
              <button onClick={()=>increment()} type="button" className='px-2 py-0 bg-gray-300 hover:bg-gray-400 rounded-xl mx-2'>+</button>
            </div>
            <div className='mt-8'>
              <span className='bg-zinc-900 hover:bg-black p-4 py-4 px-4' onClick= {()=>dispatch(addItem(Product))}>
                  <Image src="/WhiteCart.png" alt="Error" width={30} height={40} style={{ display: 'inline-block' }} />
                  <span className='text-white mx-4'>Add to Cart</span>
              </span>
              <span className='font-bold mx-4'>Rs: {Product.price}</span>
            </div>
        </div>
      </div>
      <button type="button" onClick={()=>navigateToDestination()}>cartItems</button>
      <Footer/>
    </div>
  )
}

export default ViewProduct