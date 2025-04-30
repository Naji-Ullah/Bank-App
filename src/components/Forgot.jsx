import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";





const Forgot = () => {
    const users = useSelector((state) => state.user.users);
    const [username, setUsername] = useState('');
    const [hint, setHint] = useState(null);

    const showHint = () => {
        const user = users.find((u) => u.username === username);
        if (user) {
            const firstLetter = user.password.charAt(0);
            setHint(`Password starts with: ${firstLetter}`);
        } else {
            alert('Username not found');
            setHint(null);
        }
    };

    return (
        <div className="flex justify-center items-center bg-gradient-to-r from-black via-gray-800 to-black p-3 h-auto lg:min-h-screen">
            <div className="bg-white p-6 rounded-xl shadow-md max-w-md w-full">
                <h2 className="text-xl font-bold text-center mb-4">Forgot Password</h2>
                <input
                    className="border p-2 w-full mb-2"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button
                    className="bg-gray-800 hover:bg-black text-white p-2 w-full rounded"
                    onClick={showHint}
                >
                    Show Password Hint
                </button>
                {hint && (
                    <div className="mt-4 text-black text-center font-semibold">
                        {hint}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Forgot;
