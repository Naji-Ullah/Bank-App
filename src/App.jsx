import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CarouselDefault from "./components/Hero";
import Cards from "./components/Card";
import Stats from "./components/Stats";
import Business from "./components/Business";
import ButtonScrollTop from "./components/ButtonScrollTop";
import Clients from "./components/Clients";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { CardDeals } from "./components";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Forgot from "./components/Forgot";

import usersData from "./users.json"; 

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(usersData);

  const scaleUpVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    whileInView: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    viewport: { once: true },
  };

  return (
    <Router>
      <ButtonScrollTop />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <CarouselDefault scaleUpVariants={scaleUpVariants}/>
              <Cards />
              <Stats />
              <Business />
              <CardDeals />
              <Clients />
              <ContactForm scaleUpVariants={scaleUpVariants} />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login users={users} setCurrentUser={setCurrentUser} />} />
        <Route path="/register" element={<Register users={users} setUsers={setUsers} />} />
        <Route path="/ForgotPassword" element={<Forgot users={users} />} />

        <Route
          path="/dashboard"
          element={currentUser ? <Dashboard user={currentUser} /> : <Login users={users} setCurrentUser={setCurrentUser} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
