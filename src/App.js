import React from "react";
import MainNav from "./shared/header/MainNav";
import Footer from "./shared/footer/Footer";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <MainNav />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
