import { Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import JobList from './JobList';
// import JobDetail from './JobDetail';
// import NotFoundPage from './NotFound';
// import GetProductInfo from './API';
// import ProductsList from './ProductsList';
import HomeView from './HomeView';
import BasicView from './BasicView';
import Navigation from './Navigation';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/products" element={<BasicView />} />
      </Routes>
    </>
  );
};
