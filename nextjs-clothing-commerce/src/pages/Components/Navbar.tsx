"use client";
import Image from 'next/image';
import Link from 'next/link';
import {useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {SignOutButton,SignInButton  } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { toast } from 'react-hot-toast';
import { search } from '@/redux/actions';

export default function Navbar() {
  const [count,setCount] = useState(0);
  const {isSignedIn} = useUser();
  const [check,setCheck] = useState(0) 
  const countloader = useSelector((state:any) => state.count);

  const dispatch = useDispatch();

  const handleChange = (e:any) => {
    dispatch(search(e.target.value))
  }

  useEffect(() => {
    let temp = 0;
    let cartData = JSON.parse(sessionStorage.getItem('cart') || '[]');
    if(cartData){
      cartData.map((data:any)=>{
        temp++
      })
    }
    setCount(temp)
  },[countloader])

  useEffect(() => {
    if(isSignedIn && !sessionStorage.getItem('reg'))
    {
      sessionStorage.setItem('reg','hello')
      toast.success('Successfully Signed In', {
        duration: 3000, // Duration in milliseconds
        position: 'bottom-right', // Toast position
        style: {backgroundColor:'black',color:'white'},
        icon: '🛒', // Custom icon
      });
    }
    else if(check>1){
      toast.success('Successfully Signed Out', {
        duration: 3000, // Duration in milliseconds
        position: 'bottom-right', // Toast position
        style: {backgroundColor:'black',color:'white'},
        icon: '🛒', // Custom icon
      });
      sessionStorage.setItem('reg','')
    }
    setCheck((value)=>value+1)
    // check+=1
  }, [isSignedIn])
  
  return (
      <nav className="flex justify-between flex-row" style={{ alignItems: 'center', alignSelf: 'center' }}>
        <Link href="https://hackathon1-1-khizer406-git.vercel.app/" className="flex items-center">
          <Image src="/Circle.png" alt="Error" width={30} height={40} /> 
          <div className="font-extrabold text-2xl">Dine Market</div>
        </Link>         
        <nav className="flex justify-between flex-row space-x-4 ">
        <Link href="/female"><div className="font-light w-full h-full transition-transform transform-gpu hover:scale-110">Female</div></Link>
        <Link href="/male"><div className="font-light transition-transform transform-gpu hover:scale-110">Male</div></Link>
        <Link href="/kids"><div className="font-light transition-transform transform-gpu hover:scale-110">Kids</div></Link>
        <Link href="/AllProducts"><div className="font-light transition-transform transform-gpu hover:scale-110">All Products</div></Link>
        </nav>
        <nav className="flex justify-between items-center flex-row space-x-2">
          <div className="border border-gray-300 px-2 py-0 rounded-md focus:outline-none focus:border-blue-500 flex items-center bg-white">
            <Image src="/SearchIcon.png" alt="Error" width={50} height={40} /> 
          <input type="text" className="pr-48  px-1 py-0 focus:border-black-500" placeholder="What are you Looking For ?" onChange={(e)=>{handleChange(e)}} />
          </div>
          <Link href={"/cart"}><Image src="/Cart.png" alt="Error" width={30} height={40} className="border border-gray-300 rounded-xl p-1 bg-gray-200 hover:bg-gray-300"/></Link>      
          {count?(<sup className='bg-red-500 rounded-xl text-white text-xl px-1 font-bold ' style={{marginLeft:-5}}> {count}</sup>):(null)}          
          {isSignedIn?
          (<div className="p-2 font-bold hover:bg-gray-600" onClick={()=>sessionStorage.setItem('cart','')}><SignOutButton/></div>)
          :(<div className="p-2 font-bold hover:bg-blue-600"><SignInButton/></div>)}
        </nav>
      </nav>    
  );
}

// signout button style={{backgroundColor:'#0d6efd'}}
// signin button style={{backgroundColor:'#5cb85c'}}