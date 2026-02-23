import { useParams, useNavigate } from "react-router-dom"
import { listings } from "../data/listings"

export default function ListingDetails() {

  const { id } = useParams()
  const navigate = useNavigate()

  const listing = listings.find(
    item => item.id === parseInt(id)
  )

  if (!listing) {
    return (
      <div className="p-6 max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 text-red-500 font-semibold hover:underline"
        >
          ← Back to listings
        </button>

        <h1 className="text-xl">Listing not found</h1>
      </div>
    )
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">

      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-red-500 font-semibold hover:underline"
      >
        ← Back to listings
      </button>

      {/* Image */}
      <img
        src={listing.image}
        alt={listing.title}
        className="w-full h-96 object-cover rounded-xl"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mt-4">
        {listing.title}
      </h1>

      {/* Location */}
      <p className="text-gray-600 mt-1">
        {listing.location}
      </p>

      {/* Rating and info */}
      <p className="mt-2 text-gray-700">
        ⭐ {listing.rating} · {listing.guests} guests · {listing.bedrooms} bedrooms
      </p>

      {/* Price */}
      <p className="text-2xl font-semibold mt-4">
        ₹{listing.price} / night
      </p>

      {/* Description */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">
          About this place
        </h2>

        <p className="text-gray-700">
          {listing.description}
        </p>
      </div>

      {/* Reserve button */}
      <button className="mt-6 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition">
        Reserve
      </button>

    </div>
  )
}