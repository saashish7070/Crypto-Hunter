import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Coinpage from './Pages/Coinpage'
import NavBar from './Components/NavBar';

function App() {
  return (
    <Router>
      <div> 
       <NavBar />
        <Routes>
          <Route path='/' element={<Homepage/>} exact/>
          <Route path='/coin/:id' element={<Coinpage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

