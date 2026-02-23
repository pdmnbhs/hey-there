import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Navbar({ setSearch }) {

  const [input, setInput] = useState("")
  const navigate = useNavigate()

  function handleSearch() {
    setSearch(input)
  }

  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b max-w-7xl mx-auto">

      {/* Logo */}
      <h1
        onClick={() => navigate("/")}
        className="text-2xl font-bold text-red-500 cursor-pointer"
      >
        airbnb
      </h1>

      {/* Right side */}
      <div className="flex items-center gap-3">

        <input
          type="text"
          placeholder="Search places"
          className="border px-4 py-2 rounded-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="bg-red-500 text-white px-4 py-2 rounded-full"
        >
          Search
        </button>

        <button
          onClick={() => navigate("/login")}
          className="border px-4 py-2 rounded-full hover:bg-gray-100"
        >
          Login
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
        >
          Signup
        </button>

      </div>

    </nav>
  )
}