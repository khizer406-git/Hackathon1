import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import React from 'react'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem} from '../redux/actions';
import { toast } from 'react-hot-toast';
import { useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";

const ViewProduct = () => {

  const dispatch = useDispatch();
  const router = useRouter();
  const [quantity,setQuantity] = useState(1);
  const {userId } = useAuth(); 
  const { isSignedIn, user } = useUser();
  
  const Product = {
    name : router.query.name || '',
    src  : typeof router.query.src === 'string' ? router.query.src : '',
    price : router.query.price || '',
    quantity : quantity,
  }
  
  const increment = () => {
    setQuantity(quantity+1);
  }
  
  const decrement = () => {
    if(quantity > 1)
        setQuantity(quantity-1);
  }

  const addToCart = () => {
      let cartData = JSON.parse(sessionStorage.getItem('cart') || '[]');
      let check = true;  
      cartData = cartData.map((data:any) => {
        if (data.name === Product.name) {
          check = false;
          data.quantity += quantity;
        }
        return data;
      });
    
      if (check) 
        cartData.push(Product);
      
      sessionStorage.setItem('cart', JSON.stringify(cartData));
      toast.success('Item Successfully add to Cart', {
        duration: 3000, // Duration in milliseconds
        position: 'bottom-right', // Toast position
        style: {backgroundColor:'black',color:'white'},
        icon: '🛒', // Custom icon
      });

    }
  
  

  return (
    <div className="my-14 mx-24" >
      <Navbar/>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr 4fr 3fr)', gridAutoRows: 'minmax(450px,auto)', }}
      className='mt-6'>
        <div className='mt-10'>
            <img src={Product.src} alt="Error" width={120} height={100} style={{ display: 'flex' }} />
        </div>
        <div className='my-10' style={{}}>
            <img src={Product.src} alt="Error" width={500} height={200} style={{ display: 'flex',width:'100%',height:'100%' }} />
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
            <div className='mt-8' onClick={()=>addToCart()}>
              <span className='bg-zinc-900 hover:bg-black p-4 py-4 px-4' onClick= {()=>dispatch(addItem(Product.name))}>
                  <img src="/WhiteCart.png" alt="Error" width={30} height={40} style={{ display: 'inline-block' }} />
                  <span className='text-white mx-4'>Add to Cart</span>
              </span>
              <span className='font-bold mx-4'>Rs: {Product.price}</span>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ViewProduct