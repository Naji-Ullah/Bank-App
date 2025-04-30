import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/userslice/userSlice";


export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);

  const handleRegister = () => {
    const invalidCharRegex = /[^a-zA-Z0-9]/;
    if (invalidCharRegex.test(username)) {
      alert("Username should not contain special characters.");
      return;
    }
    
    if (invalidCharRegex.test(password)) {
      alert("Password should not contain special characters.");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    const exists = users.some((u) => u.username === username);
    if (exists) {
      alert("Username already exists.");
      return;
    }

    const newUser = { username, password, balance: 0 };
    dispatch(registerUser(newUser))
    alert("Registered! Welcome.");
    navigate("/Dashboard");
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-black via-gray-800 to-black p-4 h-auto lg:min-h-screen">
      <div className="p-4 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4 text-white">Register</h2>
        <input
          className="border p-2 w-full mb-2"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border p-2 w-full mb-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-green-500 text-white p-2 w-full"
          onClick={handleRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
}
