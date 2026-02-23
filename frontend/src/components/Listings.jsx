import Card from "./Card"
import { listings } from "../data/listings"

export default function Listings() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      {listings.map(item => (
        <Card key={item.id} listing={item} />
      ))}

    </div>
  )
}