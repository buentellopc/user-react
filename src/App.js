import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllUsers from "./components/pages/AllUsers/AllUsers";
import NewUser from "./components/pages/NewUser/NewUser";
import Layout from "./components/layout/Layout";
import TestComponent from "./components/TestComponent";
import MainUserPage from "./components/pages/MainUserPage";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/user" element={<MainUserPage />}>
            <Route index element={<AllUsers />} />
            <Route path="new-user" element={<NewUser />} />
          </Route>
          <Route path="/userInfo">
            <Route index element={<TestComponent />} />
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
