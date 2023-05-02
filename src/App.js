import React from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Header from './Components/header';
import User from './Components/user';
import Seekers from './Components/seekers';
import Employer from './Components/employer';
import Talk from './Components/talk';
import Footer from './Components/footer';
function App() {
  return (
   <>
   <Navbar/>
   <Header/>
   <User/>
   <Seekers/>
   <Employer/>
   <Talk/>
   <Footer/>
   </>
  );
}

export default App;
