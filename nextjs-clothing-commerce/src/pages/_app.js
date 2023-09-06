

// src/pages/_app.js
import '../app/globals.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { Toaster } from 'react-hot-toast';
import { ClerkProvider } from '@clerk/nextjs';

function MyApp({ Component, pageProps }) {
  console.log(process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <Provider store={store}>
        <Toaster />      
        <Component {...pageProps} />
      </Provider>
    </ClerkProvider>
  );
}

export default MyApp;
