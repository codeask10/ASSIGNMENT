import { React } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './Components/Signin'
import Home from './Components/Home';
// import Header from './Components/Header';
import WelcomePage from './Components/WelcomePage';



function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/"  element={<Home />} />
        <Route exact path="/WelcomePage" element={<WelcomePage />} />
        <Route exact path="/Signin" element={<Signin />} />
      </Routes>
    </Router>
    </>

  );
}

export default App;
