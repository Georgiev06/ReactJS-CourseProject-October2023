import React from "react";

import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />

      <Footer />
    </div>
  );
}

export default App;
