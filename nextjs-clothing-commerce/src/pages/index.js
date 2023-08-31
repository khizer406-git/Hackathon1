// // src/pages/index.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from '../redux/actions';

// const HomePage = () => {
//   const count = useSelector((state) => state.count);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       <h1>Redux Counter App</h1>
//       <p>Count: {count}</p>
//       <button onClick={() => dispatch(increment())}>Increment</button>
//       <button onClick={() => dispatch(decrement())}>Decrement</button>
//     </div>
//   );
// };

// export default HomePage;



import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage';
import Footer from './Components/Footer';

// import {useSelector,useDispatch} from 'react-redux'
// import {actionCreators} from '../state/index'

export default function Home() {
  return (
    <div className="my-14 mx-24" >
        <Navbar/>
        <HomePage/>
        <Footer/>
    </div>
  );
}