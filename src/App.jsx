import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom"
import Home from "./components/home"
import "./components/Styles.css"
import Login from "./components/Login"
import Cart from "./components/Cart"
import Products1 from "./components/Products1"
import Signup from "./components/Signup"

function App(){
  return(
    <>
    <HashRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="products" element={<Product/>}/> */}
          <Route path="Products" element={<Products1/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="signup" element={<Signup/>}/>
          
      </Routes>
    </HashRouter>
    </>
  )
}
export default App