import { useParams } from "react-router-dom"
import { listings } from "../data/listings"

export default function ListingDetails() {

  const { id } = useParams()

  const listing = listings.find(
    item => item.id === parseInt(id)
  )

  if (!listing) {
    return <h1>Listing not found</h1>
  }

  return (
    <div className="p-6">

      <img
        src={listing.image}
        className="w-full max-w-xl rounded-lg"
      />

      <h1 className="text-2xl font-bold mt-4">
        {listing.title}
      </h1>

      <p className="text-gray-600 text-lg">
        ₹{listing.price} per night
      </p>

    </div>
  )
}