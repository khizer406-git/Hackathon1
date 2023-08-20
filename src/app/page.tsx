import Navbar from '../Components/Navbar'

import HomePage from '../Components/HomePage';
import Footer from '@/Components/Footer';

export default function Home() {
  return (
    <div className="my-14 mx-24" >
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
