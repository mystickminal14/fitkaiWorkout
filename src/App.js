
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Components/Navbar/Home';
import ExerciseDetails from './Components/Navbar/ExerciseDetails';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/exercise/:id" element={<ExerciseDetails/>}/>
      <Route path="/*" element={<h1>404 ! Page not found</h1>}/>
    </Routes>
    </>
  );
}

export default App;
