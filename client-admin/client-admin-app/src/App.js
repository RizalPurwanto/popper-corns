import logo from './logo.svg';
import './App.css';
import Home from './views/Home'
import Sidebar from './components/Sidebar.js';
import Login from './views/Login'
import Register from './views/Register'
import AddForm from './views/AddForm';
import EditForm from './views/EditForm';
import Genre from './views/Genres'
import AddGenre from './views/AddGenre'
import EditGenre from './views/EditGenre'
import { Routes, Route, Link, useLocation } from "react-router-dom"
import AuthRoute from './components/AuthRoute';
import RequireAuth from './components/RequireAuth';
import { useEffect, useState } from 'react';



function App() {
  const [loginStatus, setLoginStatus] = useState(false)
  let location = useLocation()
  useEffect(() => {

    // console.log(localStorage.access_token, loginStatus, "INI USEEFFECT APP")
    // console.log(location, "INI LOCATION")
    if (localStorage.access_token) {

      setLoginStatus(true)
    } else {
      setLoginStatus(false)
    }


  }, [location])
  // console.log(localStorage.access_token, "INI ACCESS TOKEN")
  return (

    <div className="App h-screen relative flex" >
      {loginStatus && <Sidebar


      ></Sidebar>}


      <div className='w-full flex-1 mx-2'>
        <Routes>
          <Route
            path='/'
            element={
              <RequireAuth>
                <Home></Home>
              </RequireAuth>
            }>



          </Route>
          <Route path='genres' element={<RequireAuth><Genre></Genre></RequireAuth>}></Route>
          <Route path='add' element={
            <RequireAuth>
              <AddForm></AddForm>
            </RequireAuth>


          }>

          </Route>

          <Route path='addgenre' element={
            <RequireAuth>
              <AddGenre></AddGenre>
            </RequireAuth>


          }>

          </Route>

          <Route path='movies/:movieId' element={<RequireAuth>
            <EditForm></EditForm>
          </RequireAuth>}></Route>

          <Route path='genres/:genreId' element={<RequireAuth>
            <EditGenre></EditGenre>
          </RequireAuth>}></Route>

          {/* <Route path='/' element={<Home></Home>} ></Route> */}

          <Route path='/register' element={<RequireAuth><Register></Register></RequireAuth>}></Route>
          <Route path='/login' element={<RequireAuth><Login></Login></RequireAuth>}></Route>



        </Routes>





      </div>
      {/* <div className='bg-red-700 text-white font-bold h-full w-1/2'>
        TEST div
      </div> */}
    </div>
  );
}

export default App;
