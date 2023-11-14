import React from "react";

import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Catalog from "./components/Catalog/Catalog";

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <main>
        <Catalog/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
