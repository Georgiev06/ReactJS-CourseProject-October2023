import React from "react";

import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <Carousel/>
        <main id='main-content'>
          <Catalog />
        </main>
      <Footer />
    </div>
  );
}

export default App;
