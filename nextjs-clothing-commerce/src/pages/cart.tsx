'use client'
import React, { useState,useEffect } from 'react'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import {useDispatch } from 'react-redux';
import { subtractItem} from '../redux/actions';
import { toast } from 'react-hot-toast';
import { useUser } from "@clerk/nextjs";
import Image from 'next/image';
const Cart = () => {

  const dispatch = useDispatch();
  const [item,setitem] = useState([]);
  const [total,setTotal] = useState(0);
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    let cartData = sessionStorage.getItem('cart');
    var existingCart = cartData ? JSON.parse(cartData) : [];
    setitem(existingCart);
    let count = existingCart.reduce((accumulator:number,data:any)=> accumulator+parseFloat(data.price)*parseFloat(data.quantity),0)    
    setTotal(count)
  },[]);
  
  const increment = (product: any) => {
    const updatedProducts:any = item.map((p: any) =>
      p === product ? { ...p, quantity: p.quantity + 1 } : p
    );
    setTotal((prevTotal)=>prevTotal + parseFloat(product.price))
    setitem(updatedProducts);
    product.quantity += 1;
  }

  const decrement = (product: any) => {
    if (product.quantity > 1) {
      const updatedProducts:any = item.map((p: any) =>
        p === product ? { ...p, quantity: p.quantity - 1 } : p
      );
      setTotal((prevTotal)=>prevTotal - parseFloat(product.price))
      setitem(updatedProducts);
      product.quantity -= 1;
    }
  }

  const handleCheckout = async () => {
    try {
        const order = item.map((p:any)=>{
          const {src, ...rest} = p; 
          return rest;
        })
        const response = await fetch('http://localhost:3001/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          products: order,
        }),
      });
      const data = await response.json();
      window.location.href = data.url
    } catch (error) {
        toast.error("Error in proceeding to payment page",{
        duration: 3000, // Duration in milliseconds
        position: 'bottom-right', // Toast position
        style: {backgroundColor:'black',color:'white'},
      })
    }
  };

  const handleCheckOut = () => {
    if(total === 0){
      toast.error("Please add Products in Cart",{
        duration: 3000, // Duration in milliseconds
        position: 'bottom-right', // Toast position
        style: {backgroundColor:'black',color:'white'},
      })
    }
    if(!isSignedIn)
        toast.error("Please Sign In",{
          duration: 3000, // Duration in milliseconds
          position: 'bottom-right', // Toast position
          style: {backgroundColor:'black',color:'white'},
        })
    if(total !== 0 && isSignedIn){
        handleCheckout();
    }
  }

  const deleteProduct = (product:any) => {
    const updatedProducts = item.filter ((p: any) => p !== product);
    let temp = parseFloat(product.quantity)*parseFloat(product.price)
    setTotal((prev)=>prev-temp)
    setitem(updatedProducts);
    sessionStorage.setItem('cart', JSON.stringify(updatedProducts));
    product.quantity += 1;
    dispatch(subtractItem());
  }  

  return (  
    <div className="my-14 mx-24" >
      <Navbar/>
      <div className='my-10'>
        {item && item.length >0 ? item.map((data: any) =>
        {
          return(
          <div key={Math.random()}>
            <div className='bg-gray-100 mx-24 my-4' style={{display: 'grid', gridTemplateColumns: 'repeat(1, 2fr 1fr 1fr 1fr)', gridAutoRows: 'minmax(0px,auto)',alignItems:'center'}}>
              <span className='mx-4 my-2' style={{padding:0}}>
                <Image src={data.src} alt="Error" width={1000} height={1000} style={{width:100,height:100,borderRadius:50, display:'inline',marginRight:20}}/>
                <span>{data.name}</span>
              </span>
              <span>
                <span className='font-bold'>Quantity: </span>
                <button onClick={() => decrement(data)} type="button" className='px-2 py-0 bg-gray-300 hover:bg-gray-400 rounded-xl mx-2'>-</button>
                <span>{data.quantity}</span>
                <button onClick={() => increment(data)} type="button" className='px-2 py-0 bg-gray-300 hover:bg-gray-400 rounded-xl mx-2'>+</button>
              </span>
              <span className='flex justify-center'>{data.quantity} x {data.price} = {data.quantity * data.price}</span>
              <div onClick={()=>deleteProduct(data)}><button type="button"><img src="/bin.png" alt="" width={50} height={50}/>&nbsp;Delete</button></div>             
            </div>
          </div>
        )}
          ):(<div className='my-16 text-center text-4xl font-bold'>No Products in Cart</div>)}
        <div className='my-4 flex items-center justify-center flex-col'>
            <div className="p-4 text-2xl font-bold" >Total: RS {total}</div>
            <button className="px-4 py-2 bg-zinc-900 text-white rounded hover:bg-black" type="button" onClick={handleCheckOut}>Checkout</button>
        </div>
      </div>
      <Footer/>
    </div> 
  )
}

export default Cart;