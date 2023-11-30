import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Contact from './Pages/Contact';
import Detail from './Pages/Detail';
import Favs from './Pages/Favs';
import './index.css';
import ContextProvider from './Components/utils/global.context';
import PageNotFound from './Pages/PageNotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
