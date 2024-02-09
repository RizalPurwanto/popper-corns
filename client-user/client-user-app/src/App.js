import logo from './logo.svg';
import './App.css';
import Home from './views/Home'
import Details from  './views/Details'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route, Link, useLocation } from "react-router-dom"
function App() {
  return (
    <div className="App  h-full py-20 px-20 bg-gray-300 flex  justify-center">
      <div className='w-3/4 flex  flex-col '>
      <div className='bg-white  '>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element= {
          <Home></Home>
        }>
        
        </Route>
        <Route path='movies/:movieId' element= {
          <Details></Details>
        }>
        
        </Route>
      </Routes>
      
      
      </div>
      <div className='bg-white  my-5'>
     
      
      <Footer></Footer>
      </div>
      </div>
      
     
    </div>
  );
}

export default App;
