import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './header/Header';
import Grid from './grid/Grid';
import Footer from './footer/Footer';

import css from './App.module.scss';

function App() {
  return (
    <div className={css.root}>
      <Header />
      <Grid />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
