export default function Dashboard({ user })
 {
    return (
      <div className="flex justify-center items-center bg-gradient-to-r from-black via-gray-800 to-black p-4 h-auto lg:min-h-screen">
        <h2 className="text-2xl font-bold text-white">Welcome, {user.username}!</h2>
      </div>
    );
  }
  