import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ToDo from "./components/ToDo";
import Register from "./components/Register";
import { useState } from "react";

function App() {
  const [users, setusers] = useState([]);

  const handleRegisterRequest = (userName, passWord) => {
    console.log(userName, passWord);
    setusers((currentusers) => [
      ...currentusers,
      { name: userName, password: passWord },
    ]);
    console.log(users);
  };

  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="login" element={<Login users={users} />} />
        <Route
          path="register"
          element={
            <Register users={users} registerRequested={handleRegisterRequest} />
          }
        />
        <Route path="/to-do" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
