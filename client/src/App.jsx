import React from "react";
import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/authContext";

import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import Home from "./components/Home/Home";
import CreateHouseModal from "./components/Create/CreateHouseModal";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import About from "./components/About/About";
import EditHouseModal from "./components/Edit/EditHouseModal";
import AuthGuard from "./components/Guards/AuthGuard";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen justify-between">
        <Header />
        
        <main id="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/houses" element={<Catalog />} />
            <Route path="/house/create" element={<AuthGuard><CreateHouseModal /></AuthGuard> }/>
            <Route path="/houses/:houseId/edit" element={<AuthGuard><EditHouseModal/></AuthGuard> }/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>
  );
}
export default App;
