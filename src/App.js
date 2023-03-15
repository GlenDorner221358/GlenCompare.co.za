import './css/navbar.css';
import './css/landing.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/landing';
import Timeline from './pages/timeline';
import Compare from './pages/compare';
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './components/navbar';

function App() {
  return (
    <div classname="App">
      <Sidebar />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/timeline' element={<Timeline />} />
          <Route path='/compare' element={<Compare />} />
        </Routes>
    </div>
  );
}

export default App