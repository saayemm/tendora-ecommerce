import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import Collection from "./pages/Collection"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import PlaceOrder from "./pages/PlaceOrder"
import Orders from "./pages/Orders"


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/collection" element={<Collection/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/place-order" element={<PlaceOrder/>} />
        <Route path="/orders" element={<Orders/>} />
      </Routes>
    </div>
  )
}

export default App