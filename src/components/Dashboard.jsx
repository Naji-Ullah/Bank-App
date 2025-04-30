import { useSelector, useDispatch } from "react-redux";
import { updateBalance} from "../features/userslice/userSlice";

function Dashboard() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  if (!currentUser) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <p className="text-xl">You must be logged in to view the dashboard.</p>
      </div>
    );
  }

  const AddBalance = () => {
    const input = prompt("Enter amount to add:");
    const amount = parseFloat(input);

    if (!isNaN(amount) && amount > 0) {
      dispatch(updateBalance(amount));
    } else {
      alert("Please enter a valid number.");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-r from-black via-gray-800 to-black p-8 h-auto lg:min-h-screen">
      <h2 className="text-3xl font-bold text-yellow-400 mb-4">
        Welcome, <span className="text-white">{currentUser.username}</span>!
      </h2>

      <div className="bg-gray-900 rounded-xl shadow-lg p-6 text-white text-center">
        <p className="text-lg mb-2">Your Balance:</p>
        <p className="text-4xl font-bold text-green-400">
          ${currentUser.balance}
        </p>

        <button
          className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-full transition duration-300"
          onClick={AddBalance}
        >
          Add Balance
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
