import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        {/* <Route path="/cakes" element={<LandingPage />}></Route> */}
        {/* <Route path="/header" element={<Header />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
