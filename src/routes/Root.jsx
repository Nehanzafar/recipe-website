import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect } from "react";

const Root = () => {
  var scrollValue = document.documentElement.scrollTop
  useEffect(()=>{
    console.log(scrollValue)

  }, [scrollValue])
  return (
    <div className="">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
