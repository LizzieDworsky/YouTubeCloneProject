// General Imports
import { Routes, Route } from "react-router-dom";
// import "./App.css";

// Pages Imports
// import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
// import AddCarPage from "./pages/AddCarPage/AddCarPage";
import SearchPage from "./pages/SearchPage";
import VideoPage from "./pages/VideoPage";

// Component Imports
// import Navbar from "./components/NavBar/NavBar";
// import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav";
import { useEffect, useState } from "react";
import axios from "axios";

// Util Imports
// import PrivateRoute from "./utils/PrivateRoute";

function App() {
    return (
        <div>
            <Nav />

            <Routes>
                <Route path="/" element={<SearchPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/video" element={<VideoPage />} />
            </Routes>
        </div>
        // <div>
        //     <Navbar />
        //     <Routes>
        //         <Route
        //             path="/"
        //             element={
        //                 <PrivateRoute>
        //                     <HomePage />
        //                 </PrivateRoute>
        //             }
        //         />
        //         <Route path="/register" element={<RegisterPage />} />
        //         <Route path="/login" element={<LoginPage />} />
        //         <Route
        //             path="/addcar"
        //             element={
        //                 <PrivateRoute>
        //                     <AddCarPage />
        //                 </PrivateRoute>
        //             }
        //         />
        //     </Routes>
        //     <Footer />
        // </div>
    );
}

export default App;
