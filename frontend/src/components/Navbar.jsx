import { useState } from "react"

export default function Navbar({ setSearch }) {

  const [input, setInput] = useState("")

  function handleSearch() {
    setSearch(input)
  }

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">

      <h1 className="text-2xl font-bold text-red-500">
        airbnb
      </h1>

      <div className="flex gap-2">

        <input
          type="text"
          placeholder="Search places"
          className="border px-3 py-2 rounded-full"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="bg-red-500 text-white px-4 py-2 rounded-full"
        >
          Search
        </button>

      </div>

    </nav>
  )
}