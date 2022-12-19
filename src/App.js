import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Product from "./Pages/Product";
import Brand from "./Pages/Brand";
import Category from "./Pages/Category";
import Model from "./Pages/Model";
function App() {
  return (
    <div>
      <Router>
       <Navbar/>
        <Routes>
        <Route path="/category" element={<Category />} />
        <Route path="/brand" element={<Brand/>} />
        <Route path="/model" element={<Model/>} />
        <Route path="/product" element={<Product/>} />
    </Routes>
      </Router>
    </div>
  );
}

export default App;
