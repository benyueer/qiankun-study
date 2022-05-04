import logo from './logo.svg';
import { BrowserRouter, Route, Link, Routes } from  'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter basename='/react'>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Routes>
          <Route path="/" exact element={<Home />}>
          </Route>
          <Route path='/about' exact element={<div>about</div>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}