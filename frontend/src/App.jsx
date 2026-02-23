import Navbar from "./components/Navbar"
import Listings from "./components/Listings"

import {
  Routes,
  Route
} from "react-router-dom"

import ListingDetails from "./pages/ListingDetails"

import { useState } from "react"

function App() {

  const [search, setSearch] = useState("")

  return (
    <>
      <Navbar setSearch={setSearch} />

      <Routes>

        <Route
          path="/"
          element={<Listings search={search} />}
        />

        <Route
          path="/listing/:id"
          element={<ListingDetails />}
        />

      </Routes>

    </>
  )

}

export default App