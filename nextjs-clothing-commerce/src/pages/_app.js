// src/pages/_app.js
import '../app/globals.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { Toaster, toast } from 'react-hot-toast';
import { ClerkProvider } from '@clerk/nextjs'

function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider>
    <Provider store={store}>
      <Toaster />      
      <Component {...pageProps} />
    </Provider>
    </ClerkProvider>
  );
}

export default MyApp;