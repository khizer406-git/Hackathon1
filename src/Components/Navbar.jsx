import Image from 'next/image';

export default function Navbar() {
  return (
      <nav className="flex justify-between flex-row" style={{ alignItems: 'center', alignSelf: 'center' }}>
          <a href="http://" className="flex items-center">
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
            <Image src="/SearchIcon.png" alt="Error" width={50} height={40} /> 
          <input type="text" className="pr-48  px-1 py-0 focus:border-black-500" placeholder="What are you Looking For ?" />
          </div>
          <a href="http://">
          <Image src="/Cart.png" alt="Error" width={30} height={40} className="border border-gray-300 rounded-xl p-1 bg-gray-300"/>
          </a>
          <a href="http://">
          <div className="underline ..." >Sign In</div>
          </a>
        </nav>  
      </nav>    
  );
}
