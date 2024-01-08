import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ProductsList from './pages/ProductsList';
import ProductDetails from './pages/ProductDetails';
import Breadcrumb from './components/Breadcrumb';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>BKS STORE</h1>
        <Breadcrumb />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
