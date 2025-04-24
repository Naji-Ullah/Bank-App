import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Login({ users, setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      setCurrentUser(user);
      navigate("/dashboard");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
     <div className="flex justify-center items-center bg-gradient-to-r from-black via-gray-800 to-black min-h-[00px] sm:min-h-[00px] md:min-h-[00px] lg:min-h-[650px] p-4">
        <div className="p-4 max-w-md mx-auto">
            <h2 className="text-xl font-bold mb-4 text-white">Login</h2>
                <input className="border p-2 w-full mb-2" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className="border p-2 w-full mb-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="bg-blue-500 text-white p-2 w-full" onClick={handleLogin}>Login</button>
            <Link to="/ForgotPassword" className="text-sm text-blue-400 hover:underline block text-center mt-2">
            Forgot Password?
            </Link>
        </div>
    </div>
  );
}
