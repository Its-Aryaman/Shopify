import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbarlayout from './Layouts/Navbarlayout.jsx'
import Footerlayout from './Layouts/Footer.jsx'
import Layout from './Layouts/Layout.jsx'
import Products from './components/Products.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ProductDetails from './pages/ProductDetails.jsx';
import Home from './pages/Home.jsx'
// import { Button, Navbar, Card, Dropdown } from "flowbite-react";
// import { Checkbox, Label, TextInput } from "flowbite-react";



function App() {
  const [count, setCount] = useState(0)

  return (

    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/details' element={<ProductDetails />} />
      </Routes>
     </Router>
    
     )
}

export default App
