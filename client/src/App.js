import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import './App.css';
import Programs from './Pages/Programs/Programs';
import Mission from './Pages/Mission/Mission';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Programs' element={<Programs/>}/>
          <Route path='/Mission' element={<Mission/>}/>
          <Route path='/Contact'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
