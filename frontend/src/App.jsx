import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Listings from "./components/Listings"

import {
  Routes,
  Route
} from "react-router-dom"

import ListingDetails from "./pages/ListingDetails"
import Login from "./pages/Login"
import Signup from "./pages/Signup"

import { useState } from "react"

function App() {

  const [search, setSearch] = useState("")

  return (
    <>
      <Navbar setSearch={setSearch} />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />
              <Listings search={search} />
            </>
          }
        />

        <Route
          path="/listing/:id"
          element={<ListingDetails />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

      </Routes>

    </>
  )

}

export default App