import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllUsers from "./components/pages/AllUsers/AllUsers";
import NewUser from "./components/pages/NewUser/NewUser";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<AllUsers />} />
          <Route path="/new-user" element={<NewUser />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
