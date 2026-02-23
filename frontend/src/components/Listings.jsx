import Card from "./Card"
import { listings } from "../data/listings"

export default function Listings({ search }) {

  const filtered = listings.filter(item =>
    item.title.toLowerCase().includes(
      search.toLowerCase()
    )
  )

  return (
    <div className="p-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {filtered.map(item => (
        <Card key={item.id} listing={item} />
      ))}

    </div>
  )
}