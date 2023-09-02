// src/pages/_app.js
import '../app/globals.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { Toaster, toast } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Toaster />      
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;