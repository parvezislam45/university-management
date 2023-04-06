
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Home/Footer';
import Login from './Components/Authentication/Login';
import SignUp from './Components/Authentication/SignUp';
import Dashboard from './Components/Dashboard/Dashboard';
import Update from './Components/Dashboard/Update';
import RequireAuth from './Components/Auth/RequireAuth';

function App() {
  return (
    <div className="App bg-blue-950">
     <Navbar></Navbar>
    <Routes>
      <Route path='/'element={<Home></Home>}></Route>
      <Route path='/login'element={<Login></Login>}></Route>
      <Route path='/signup'element={<SignUp></SignUp>}></Route>
      <Route path='/dashboard/'element={<RequireAuth><Dashboard/></RequireAuth>}></Route>
      <Route path='/update/:id'element={<Update/>}>

      </Route>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
