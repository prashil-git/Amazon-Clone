import Navbar from "./components/Header/Navbar";
import Newnav from "./components/new_navbar/Newnav";
import Maincomp from "./components/Home/Maincomponent";
import Footer from "./components/Footer/footer";
import SignIn from "./components/signup_signin/sign_in";
import SignUp from "./components/signup_signin/signup";
import Cart from "./components/Cart/Cart";
import Buynow from "./components/BuyNow/Buynow";
import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./App.css";

function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, []);

  return (
    <div>
      {data ? (
        <>
          <Navbar />
          <Newnav></Newnav>
          <Routes>
            <Route path="/" element={<Maincomp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/getproductsone/:id" element={<Cart />} />
            <Route path="/buynow" element={<Buynow />} />
          </Routes>
          <Footer></Footer>
        </>
      ) : (
        <div className="circle">
          <CircularProgress></CircularProgress>
          <h2>Loading ...</h2>
        </div>
      )}
    </div>
  );
}

export default App;
