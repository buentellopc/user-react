import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllUsers from "./components/pages/AllUsers/AllUsers";
import NewUser from "./components/pages/NewUser/NewUser";
import MainNavigation from "./components/layout/MainNavigation/MainNavigation";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllUsers />} />
        <Route path="/new-user" element={<NewUser />} />
      </Routes>
    </div>
  );
}

export default App;
