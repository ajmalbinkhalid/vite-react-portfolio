import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const LayOut = () => {
  return (
    <div className=''>
      
      <Navbar/>
      <main className="pt-5">
        <Outlet/>
      </main>
      <Footer/>

    </div>
  );
};

export default LayOut;
