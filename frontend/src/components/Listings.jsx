import Card from "./Card"
import { listings } from "../data/listings"

export default function Listings() {
  return (
    <div>
      {listings.map(item => (
        <Card key={item.id} listing={item} />
      ))}
    </div>
  )
}