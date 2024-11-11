import { BrowserRouter,Route, Routes } from "react-router-dom";
import AllProducts from "./AllProducts";
import Header from "./Header";
import { CartProvider } from "./cartContext";
import Cart from "./cart";


function App() {
  return (
    <div className="App">
      <h1>Akhil</h1>
      <BrowserRouter>
        <CartProvider>
            <Header/>
            <Routes>
              <Route path="/cart" element={<Cart />} />
              <Route path="/AllProducts" element={<AllProducts />} />
            </Routes>
        </CartProvider>
      </BrowserRouter>
      
      
      
    </div>
  );
}

export default App;
