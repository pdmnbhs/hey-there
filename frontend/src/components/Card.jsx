export default function Card({ listing }) {
  return (
    <div>
      <img src={listing.image} width="300" />
      <h3>{listing.title}</h3>
      <p>₹{listing.price}</p>
    </div>
  )
}