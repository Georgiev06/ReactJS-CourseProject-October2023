import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import Carousel from "./components/Carousel/Carousel";
import Home from "./components/Home/Home";
import CreateHouseModal from "./components/Create/CreateHouseModal";
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Logout from "./components/Logout/Logout"
import About from "./components/About/About"
import * as houseService from "./services/houseService"

function App() {

  const navigate = useNavigate()

  const [auth, setAuth] = useState({});

  const loginSubmitHandler = (values) => {
    console.log(values);
  }

  const createSubmitHandler = async (values) => {
    try {
      await houseService.create(values);

      navigate('/houses')
    } catch (error) {
      console.log(err)
    }
  }
  
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      {/* <Carousel /> */}
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/houses" element={<Catalog />} />
          <Route path="/house/create" element={<CreateHouseModal createSubmitHandler={createSubmitHandler}/>} />
          <Route path="/login" element={<Login loginSubmitHandler={loginSubmitHandler} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
export default App;
