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
          <Route path="/user">
            <Route index element={<AllUsers />} />
            <Route path="new-user" element={<NewUser />} />
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
