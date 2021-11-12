import NavBar from './Components/NavBar/NavBar.jsx';

import Home from './Components/Pages/Home.jsx';

import Login from './Components/Pages/Auth/login.jsx';

import Add from './Components/Pages/AddTodo.jsx';

import Footer from './Components/Footer/footer.jsx';

// import classes from './App.module.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
  
  <BrowserRouter>
      <NavBar />
      <div style={{ marginTop: 40 }}>
        <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/add' element={<Add />} />
        
        <Route path='/login' element={<Login />} />
       
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
