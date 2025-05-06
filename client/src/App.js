import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import './App.css';
import Programs from './Pages/Programs/Programs';
import Mission from './Pages/Mission/Mission';
import Contact from './Pages/Contact/Contact';
// import Testimonials from './Pages/Testimonials/Testimonials'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Programs' element={<Programs/>}/>
          <Route path='/Mission' element={<Mission/>}/>
          {/* <Route path='/Testimonials' element={<Testimonials/>}/> */}
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
