import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@pages/home/page';
import Dashboard from '@pages/dashboard/page';
import TopCompanies from "./(pages)/top-companies/page";
import Header from '@components/layout/header';
import Footer from '@components/layout/footer';
import Search  from '@pages/search/page';
import Filter from '@components/PopupFilter/Filter';
import CompanyCard from '@components/CompanyCard/CompanyCard';


const AppRouter = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route exact path="/" element={<Home/>} />
    //     <Route path="/dashboard" element={<Dashboard/>} />
    //   </Routes>
    // </Router>
    <div>
      <Header />
      <Search />
      {/* <CompanyCard /> */}
      {/* <Filter /> */}
      {/* <TopCompanies /> */}
      <Footer />
    </div>
  );
};

export default AppRouter;
