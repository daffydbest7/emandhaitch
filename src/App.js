import './App.css';
import { Routes, Route } from 'react-router-dom';
import CountDown from './pages/CountDown';

function App() {
  
  return (
    <div className="App font-serif">
     <Routes>
        <Route index path='/' element={<CountDown/>}/>
     </Routes>
    </div>
  );
}

export default App;
