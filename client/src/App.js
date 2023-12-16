import "./App.css";
import { useState } from "react";
import { Box } from "@mui/material";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import { Login } from "./components/account/Login";
import DataProvider from "./context/DataProvider";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Update from './components/create/Update';
import CreatePost from './components/create/CreatePost';
import DetailView from "./components/details/DetailView";
import Blogs from "./components/home/Blogs";
import About from "./components/about/About";
import { AbcOutlined, Dashboard } from "@mui/icons-material";
import Contact from "./components/contact/Contact";
import Dashboard34 from "./components/Dashboard/Dashboard";

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  const token = sessionStorage.getItem("accessToken");
  return isAuthenticated && token ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/account" />
  );
};



function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
        <Box style={{ marginTop: 64 }}>
          <Routes>
            <Route
              path="/account"
              element={<Login isUserAuthenticated={isUserAuthenticated} />}
            />

            <Route
              path="/"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/" element={<Home />} />
            </Route>

            <Route
              path="/about"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/about" element={
                <About/>
              } />
            </Route>

            <Route
              path="/contact"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/contact" element={
                <Contact/>
              } />
            </Route>

            <Route
              path="/blogs"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/blogs" element={<Blogs />} />
            </Route>
            <Route
              path="/dashboard"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/dashboard" element={<Dashboard34 />} />
            </Route>


            <Route
              path="/blogs/create"
              element={<PrivateRoute isAuthenticated={isAuthenticated} />}
            >
              <Route path="/blogs/create" element={<CreatePost />} />
            </Route>


            <Route path='/blogs/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/blogs/details/:id' element={<DetailView/>} />
            </Route>
            <Route path='/blogs/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/blogs/update/:id' element={<Update/>} />
            </Route>


          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
