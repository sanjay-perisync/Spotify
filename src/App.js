import { Routes, Route } from "react-router-dom";
import StartPage from "./Components/StartPage";
import Login from "./Components/Login";
import Home from "./Components/Home";

function App() {
  return (
    <Routes>
    
      <Route
        path="/"
        element={
          <div className="App bg-black">
           <StartPage/>
          </div>
        }
      />

      {/* Login Page  */}
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
