export default function Card({ listing }) {
  return (
    <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer">

      <img
        src={listing.image}
        className="w-full h-48 object-cover"
      />

      <div className="p-3">

        <h3 className="font-semibold">
          {listing.title}
        </h3>

        <p className="text-gray-600">
          ₹{listing.price} / night
        </p>

      </div>

    </div>
  )
}