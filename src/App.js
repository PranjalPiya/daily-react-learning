import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Day2 from './day/Day2';

import Navigation from './navigation';
import Day1 from './day/Day1';
import Day3 from './day/Day3';

function App() {
  return (

    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Day1 />} />
        <Route path="/day2" element={<Day2 />} />
        <Route path="/day3" element={<Day3 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
