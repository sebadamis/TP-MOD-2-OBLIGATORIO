import Home from './Pages/Home/Home'
import Contact from './Pages/Contact/Contact'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import Login from './Pages/Login/Login'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router'
import Registration from './Pages/Registration/Registration'



function App() {


  return (
    <>

        <NavBar/>

        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/products/:prod_id' element={<ProductDetail/>}/>
          <Route path='/registration' element={<Registration/>}/>

        </Routes>

    </>
  )
}

export default App
