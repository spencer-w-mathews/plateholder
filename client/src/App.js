import { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link
} from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
  <div className="App">
    
    <Routes>
      {/* search elements in react router */}
      <Route path="/testing" element={<h1>hello?</h1>} />
      <Route path="/" element={<h1>Page Count: {count}</h1>}  />
       
        
    </Routes>
  </div>
  );
}

export default App;
