import React from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Order from './components/Order/Order';
import Products from './components/Products/Products';
import Productpage from './Screen/Productpage';
import Productscreen from './Screen/Productscreen';
import Introduce from './components/introduce/Introduce';
import CartScreen from './Screen/CartScreen';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import ProfileScreen from './Screen/ProfileScreen';
import Feedback from './components/Feedback/Feedback';
import Navbarcustom from './components/Navbar/Navbarcustom'
const mystyle = {
  margin:"200px"
};

const AppLayout = () => (
<>
<Navbar/>
<Header/>
<Introduce/>
<Products/>
<Order/>
<Gallery/>
<Intro/>
<Feedback/>
<Footer/>
</>);
const ProductLayout = ()=>(
  <>
  <Navbarcustom/>
  <main style={mystyle}>
  <Container>
    
    
    <Productpage/>
    
    
  </Container>
  </main>
  <Footer/>
  </>
);
const EachProductLayout = ()=>(
  <>
    <Navbarcustom/>
  <main style={mystyle}>
  <Container>
    
    
    <Productscreen/>
    
    
  </Container>
  </main>
  <Footer/>
  </>
);
const CartLayout = ()=>(
  <>
    <Navbarcustom/>

  <main style={mystyle}>
  <Container>
    
    
    <CartScreen/>
    
    
  </Container>
  </main>
  <Footer/>
  </>
);
const LoginLayout = ()=>(
  <>
    <Navbarcustom/>

  <main style={mystyle}>
  <Container>
    
    
    <LoginScreen/>
    
    
  </Container>
  </main>
  <Footer/>
  </>
);
const RegisterLayout = ()=>(
  <>
    <Navbarcustom/>

  <main style={mystyle}>
  <Container>
    
    
    <RegisterScreen/>
    
    
  </Container>
  </main>
  <Footer/>
  </>
);
const ProfileLayout = ()=>(
  <>
    <Navbarcustom/>

  <main style={mystyle}>
  <Container>
    
    
    <ProfileScreen/>
    
    
  </Container>
  </main>
  <Footer/>
  </>
);
function App() {
  return (
   <Router>
      <Routes>
      <Route path="/" element={<AppLayout/>}/>
      <Route path="/product" element={<ProductLayout/>}>
        <Route index element={<Productpage />} />
        
      </Route>
      <Route path='/product/:id' element={<EachProductLayout/>}/>
      <Route path='/cart/' element={<CartLayout/>}/>
      <Route path='/cart/:id' element={<CartLayout/>}/>
      <Route path='/login' element={<LoginLayout/>}/>
      <Route path='/register' element={<RegisterLayout/>}/>
      <Route path='/profile' element={<ProfileLayout/>}/>
      </Routes>
      

    </Router>
    
  );
}

export default App;