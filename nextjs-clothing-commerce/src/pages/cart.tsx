import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {

  const initialProducts = useSelector((state: any) => state.cartItems);
  const [products, setProducts] = useState(initialProducts);

  const increment = (product: any) => {
    const updatedProducts = products.map((p: any) =>
      p === product ? { ...p, quantity: p.quantity + 1 } : p
    );
    setProducts(updatedProducts);
    product.quantity += 1;
  }

  const decrement = (product: any) => {
    if (product.quantity > 1) {
      const updatedProducts = products.map((p: any) =>
        p === product ? { ...p, quantity: p.quantity - 1 } : p
      );
      setProducts(updatedProducts);
      product.quantity -= 1;
    }
  }

  return (
    <div className="my-14 mx-24" >
      <Navbar/>
      <div className='my-10'>
        {products.map((data: any) =>
          <div key={Math.random()}>
            <div className='bg-gray-100 mx-24 my-4' style={{display: 'grid', gridTemplateColumns: 'repeat(1, 2fr 1fr 1fr)', gridAutoRows: 'minmax(0px,auto)',alignItems:'center'}}>
              <span className='mx-4 my-2' style={{padding:0}}>
                <img src={data.src} alt="Error" style={{width:100,height:100,borderRadius:50, display:'inline',marginRight:20}}/>
                <span>{data.name}</span>
              </span>
              <span>
                <span className='font-bold'>Quantity: </span>
                <button onClick={() => decrement(data)} type="button" className='px-2 py-0 bg-gray-300 hover:bg-gray-400 rounded-xl mx-2'>-</button>
                <span>{data.quantity}</span>
                <button onClick={() => increment(data)} type="button" className='px-2 py-0 bg-gray-300 hover:bg-gray-400 rounded-xl mx-2'>+</button>
              </span>
              <span className='flex justify-center'>{data.quantity} x {data.price} = {data.quantity * data.price}</span>
            </div>
          </div>
          )}
        
      </div>
      <Footer/>
    </div> 
  )
}

export default Cart;