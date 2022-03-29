// import logo from "./logo.svg";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/auth" element={<AuthPage></AuthPage>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
