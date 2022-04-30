import React, { useEffect } from "react";
import Display from "../Display/Display";
import Header from "../Header/Header";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import Footer from "../Footer/Footer";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Display />
      <ProductDisplay />
      <Footer />
    </>
  );
};

export default Home;
