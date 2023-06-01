import Login from '../src/pages/Login/Login'
import Signup from '../src/pages/Signup/Signup'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from '../src/pages/Home/Home';


function App() {
  return (
    <div className="App">
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>


  );
}

export default App;
