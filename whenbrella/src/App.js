import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={<MainPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;