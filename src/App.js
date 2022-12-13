import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
