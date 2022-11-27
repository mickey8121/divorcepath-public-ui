import React from 'react';

import { Slide, ToastContainer } from 'react-toastify';

import Header from 'layout/header/Header';
import Footer from 'layout/Footer';

const Layout = ({ children }) => {
  if (typeof document !== 'undefined' && process.env.NODE_ENV !== 'development') {
    const token = localStorage.getItem('authToken');

    if (token) {
      window.location.replace(`${process.env.NEXT_PUBLIC_REDIRECT_LINK}/spousal-support`);
    }
  }

  return (
    <div className="page-content">
      <Header />
      {children}
      <Footer />
      <ToastContainer
        position="bottom-right"
        transition={Slide}
        autoClose={3000}
        newestOnTop={false}
        rtl={false}
        limit={3}
        hideProgressBar
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Layout;
