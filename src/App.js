import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Contact from "./Components/Contact/Contact";


function App() {
  return (
    <div className="flex justify-center items-center">
    <div className="container ">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/about" element={<About/>}> </Route>
          <Route path="/service" element={<Service/>}> </Route>
          <Route path="/contact" element={<Contact/>}> </Route>
        </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
    </div>
  );
}

export default App;
