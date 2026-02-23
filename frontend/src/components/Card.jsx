import { useNavigate } from "react-router-dom"

export default function Card({ listing }) {

  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/listing/${listing.id}`)}
      className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
    >

      <img
        src={listing.image}
        alt={listing.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-3">

        <h3 className="font-semibold text-lg">
          {listing.title}
        </h3>

        <p className="text-gray-500">
          {listing.location}
        </p>

        <p className="text-sm">
          ⭐ {listing.rating}
        </p>

        <p className="font-semibold mt-1">
          ₹{listing.price} / night
        </p>

      </div>

    </div>
  )
}