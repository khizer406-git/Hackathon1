import React from 'react'
import CenteredCarousel from './CenteredCarousel'
import Image from 'next/image';
const HomePage = () => {
    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr 1fr)', gridAutoRows: 'minmax(450px,auto)' }}>
                <div className="mx-8" style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gridAutoRows: 'minmax(0px,auto)' }}>
                    <div>
                        <span className='text-blue-700 mx-2 mt-16 my-8 px-2 py-2 bg-blue-200 font-bold rounded-xl inline-block font-size'>Sale 70%</span>
                    </div>
                    <div style={{ fontSize: 60, fontWeight: 'bold', lineHeight: 1.0, marginBottom: 10 }}>An Industrial Take on Streetwear</div>
                    <div className="text-md">Anyone can beat you but no one can</div>
                    <div>beat your outfit as long as you wear</div>
                    <div> Dine Outfits</div>
                    <div className='mt-8'>
                        <a href="http://localhost:3000/AllProducts">
                            <span className='bg-gray-600 p-4 py-4 px-4' >
                                <Image src="/Cart.png" alt="Error" width={30} height={40} style={{ display: 'inline-block' }} />
                                <span className='text-white mx-4'>Start Shopping</span>
                            </span>
                        </a>
                    </div>
                    <div className='my-10'>
                        <Image src="/Brands.png" alt="Error" width={500} height={100} style={{ display: 'inline-block' }} />
                    </div>
                </div>
                <div className="mt-8">
                    <Image
                        src="/Girl.png"
                        alt="Error"
                        width={1000}
                        height={1000}
                        style={{ display: 'flex', width: '100%', height: '100%' }}
                    />
                </div>
            </div>

            <div className="text-center text-blue-600 mt-10"> Promotions</div>
            <div className="text-center font-bold my-0 text-xl">Our Promotion Events</div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 2fr 1fr 1fr)' }}>

                <div>
                    <Image src="/Promo1.png" alt="" width={500} height={200} style={{ height: '45%', width: '90%', marginLeft: '5%', marginBottom: '6%' }} />
                    <Image src="/p2.png" alt="" width={500} height={200} style={{ height: '45%', width: '90%', marginLeft: '5%', marginTop: '6%' }} />
                </div>
                <Image src="/promo3.png" alt="" width={400} height={400} style={{ height: '100%', width: '95%' }} />
                <Image src="/promo4.png" alt="" width={400} height={400} style={{ height: '100%', width: '95%', marginLeft: '5%' }} />
            </div>

            <div className="text-center text-blue-600 mt-14"> Products</div>
            <div className="text-center font-bold my-0 text-2xl">Check What we have</div>
            <CenteredCarousel />
        </div>
    )
}

export default HomePage