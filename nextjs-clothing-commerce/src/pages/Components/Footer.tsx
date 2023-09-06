import Image from 'next/image';
export default function Footer() {
    
    const func = () =>
    {
        return new Date().getFullYear();
    }
    return (
        <div>
            <div className="grid grid-cols-4 grid-rows-auto md:grid-rows-1 gap-4 mt-14"
                style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr' }}>
                <div>
                    <div> <Image src="/DineMarket.png" alt="" width={200} height={200} style={{ display: 'inline' }} /></div>
                    <div className='mt-10 pl-2 font-semibold'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</div>
                    <div className='mt-2'>
                        <Image src="/Facebook.png" alt="FaceBook" width={55} height={55} className='inline'/>
                        <Image src="/Twitter.png" alt="Twitter" width={50} height={50} className='inline'/>
                        <Image src="/LinkedIn.png" alt="LinkedIn" width={50} height={50} className='inline'/>
                    </div>
                </div>
                <div className="space-y-2 font-semibold">
                    <div className='font-bold '>Company</div>
                    <div>About </div>
                    <div>Terms of Use</div>
                    <div>Privacy Policy</div>
                    <div>How it Works</div>
                    <div>Contact Us</div>
                </div>
                <div className='space-y-2 font-semibold'>
                    <div className='font-bold'>Support</div>
                    <div>Support Center</div>
                    <div>24th Service</div>
                    <div>Quick Chat</div>
                </div>
                <div className='space-y-2 font-semibold'>
                    <div className='font-bold'>Contact</div>
                    <div>Whatsapp</div>
                    <div>Support 24th</div>
                </div>
            </div>
            <div className="w-full h-0.5 bg-black mt-10"></div>
            <div className='grid grid-cols-3 justify-center mt-8'>
                <div><p className="font-semibold">Copyright ©{func()}</p> <p className="font-semibold">Dine Market</p></div>
                <div><p className="font-semibold">Desing By: <span className='font-bold'>Weird</span></p><p className="font-semibold">Design Studio</p></div>
                <div><p className="font-semibold">Code By: <a href="https://github.com/khizer406-git" target='_blank'><span className='font-bold'>khizer406-git</span></a></p></div>
            </div>
        </div>
    );
}
