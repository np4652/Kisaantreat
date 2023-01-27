import "./App.css";
import "./Component/Login.css";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState, useEffect } from "react";
import { DATACONSTANT } from "./Services/DataConstant";
import { getCookie } from "./Services/Cookies";
import Login from "./Component/Login";
import LoginOtp from "./Component/LoginOtp";
import Dashboard from "./Component/Dashboard";
import Sidebar from "./Component/Sidebar";
import Footer from "./Component/Footer";
import NaviBar from "./Component/NaviBar";
import Package from "./Component/Package";
import PackagePopup from "./Component/PackagePopup";
import Garbage from "./Component/Garbage";

function App() {
  const [page, setPage] = useState(true);
  let x = getCookie(DATACONSTANT.COOKIE_NAME);
  useEffect(() => {
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
    });
    setPage(!!getCookie(DATACONSTANT.COOKIE_NAME));
  }, [page, x]);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        {page ? (
          <>
            <NaviBar />
            <Sidebar />
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/Dashboard" element={<Dashboard />} />
              <Route exact path="Package" element={<Package />} />
              <Route exact path="PackagePopup" element={<PackagePopup />} />
              <Route exact path="Garbage" element={<Garbage />} />
            </Routes>
            <Footer />
          </>
        ) : (
          <Routes>
            <Route exact path="/" element={<LoginOtp />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/LoginOtp" element={<LoginOtp />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
