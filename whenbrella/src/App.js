import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage"
import LoginPage from "./pages/LoginPage"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element={<MainPage/>}></Route>
        <Route path = "/login" element={<LoginPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
