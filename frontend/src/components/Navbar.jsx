export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">

      <h1 className="text-2xl font-bold text-red-500">
        airbnb
      </h1>

      <div className="flex gap-4">
        <button className="px-4 py-2 border rounded-full hover:bg-gray-100">
          Login
        </button>

        <button className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600">
          Signup
        </button>
      </div>

    </nav>
  )
}