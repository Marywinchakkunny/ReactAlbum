import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Delete from './components/Delete';
import Viewall from './components/Viewall';
import Addalbum from './components/Addalbum';
import Searchalbum from './components/Searchalbum';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<Addalbum/>}/>
    <Route path='/Search' element={<Searchalbum/>}/>
    <Route path='/Delete' element={<Delete/>}/>
    <Route path='/Viewall' element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
