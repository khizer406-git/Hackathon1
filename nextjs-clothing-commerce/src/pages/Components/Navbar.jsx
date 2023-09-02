import Image from 'next/image';
import {useEffect,useState} from 'react'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export default function Navbar() {

  const [count,setCount] = useState(0);
  const countloader = useSelector((state) => state.count);
  // redux Delete and update count in cart import use State in navbar update it 
  useEffect(() => {
    console.log("I am executed")
    let temp = 0;
    let cartData = JSON.parse(sessionStorage.getItem('cart') || '[]');
    if(cartData){
      console.log("I am executed 2" , "Value of temp",temp)
      cartData.map((data)=>{
        console.log(data)
        temp++
      })
    }
      console.log("I am executed 3", "Value of temp",temp)
    setCount(temp)
    console.log(countloader)
  },[countloader])

  const navigateToDestination = () => {
    router.push({
      pathname: '/cart'
  })
};
  
  return (
      <nav className="flex justify-between flex-row" style={{ alignItems: 'center', alignSelf: 'center' }}>
          <a href="http://localhost:3000" className="flex items-center">
            <Image src="/Circle.png" alt="Error" width={30} height={40} /> 
            <div className="font-extrabold text-2xl">Dine Market</div>
          </a>         
        <nav className="flex justify-between flex-row space-x-4 ">
          <a href="/female"><div className="font-light w-full h-full transition-transform transform-gpu hover:scale-110">Female</div></a>
          <a href="/male"><div className="font-light transition-transform transform-gpu hover:scale-110">Male</div></a>
          <a href="/kids"><div className="font-light transition-transform transform-gpu hover:scale-110">Kids</div></a>
          <a href="/AllProducts"><div className="font-light transition-transform transform-gpu hover:scale-110">All Products</div></a>
        </nav>
        <nav className="flex justify-between items-center flex-row space-x-2">
          <div className="border border-gray-300 px-2 py-0 rounded-md focus:outline-none focus:border-blue-500 flex items-center bg-white">
            <img src="/SearchIcon.png" alt="Error" width={50} height={40} /> 
          <input type="text" className="pr-48  px-1 py-0 focus:border-black-500" placeholder="What are you Looking For ?" />
          </div>
          <a href="http://localhost:3000/cart">        
            <Image src="/Cart.png" alt="Error" width={30} height={40} className="border border-gray-300 rounded-xl p-1 bg-gray-300"/>
          </a>
          {count?(<sup className='bg-red-500 rounded-xl text-white text-xl px-1 font-bold ' style={{marginLeft:-5}}> {count}</sup>):(null)}          
          <a href="http://">
          <div className="underline ..." >Sign In</div>
          </a>
        </nav>  
      </nav>    
  );
}
