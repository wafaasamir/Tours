import React from "react";
import MainNav from "./shared/header/MainNav";
import Footer from "./shared/footer/Footer";
import AppRoutes from "./routes/AppRoutes";
// import MainNav from "./shared/header/MainNav";
// import Footer from "./shared/footer/Footer";
// import Destination from "./pages/Destination";
// import Contact from "./pages/Contact";
// import TourGrid from "./pages/TourGrid";
// import BlogPage from "./pages/BlogPage";


// import AppRoutes from "./routes/AppRoutes";
function App() {
  return (
    <div className="App">
      <MainNav />
      <AppRoutes />
      {/* <BlogPage /> */}
      {/* <Contact /> */}
      {/* <Destination /> */}
      {/* <TourGrid />  */}
      {/* <MainNav/> */}
      {/* <Footer/> */}

    </div>
  );
}

export default App;
