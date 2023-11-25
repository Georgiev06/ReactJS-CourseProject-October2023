import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import * as houseService from "./services/houseService";
import * as authService from "./services/authService";
import AuthContext from "./contexts/authContext";

import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import Home from "./components/Home/Home";
import CreateHouseModal from "./components/Create/CreateHouseModal";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import About from "./components/About/About";

function App() {
  const navigate = useNavigate();

  const [auth, setAuth] = useState({});

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);
    
    navigate("/");
  };

  const createSubmitHandler = async (values) => {
    try {
      await houseService.create(values);

      navigate("/houses");
    } catch (error) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ loginSubmitHandler }}>
      <div className="flex flex-col min-h-screen justify-between">
        <Header />
        {/* <Carousel /> */}
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/houses" element={<Catalog />} />
            <Route
              path="/house/create"
              element={
                <CreateHouseModal createSubmitHandler={createSubmitHandler} />
              }
            />
            <Route
              path="/login"
              element={<Login/>}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthContext.Provider>
  );
}
export default App;
