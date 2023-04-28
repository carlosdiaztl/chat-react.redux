import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import Home from "../components/Home";
import LoginI from "../components/LoginI";
import { useSelector } from "react-redux";
import Landing from "../components/Landing";
const Router = () => {
  const user = useSelector((state) => state.user);
  const [cheking, setCheking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log(user);
    if (user.user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    setCheking(false);
  }, [setIsLoggedIn, setCheking, user]);

  if (cheking) {
    return <h1>Espere....</h1>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRouter isAutentication={isLoggedIn} />}>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<LoginI />} />
        </Route>
        <Route element={<PrivateRouter isAutentication={isLoggedIn} />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
