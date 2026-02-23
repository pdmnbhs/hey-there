export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "20px",
      borderBottom: "1px solid #ddd"
    }}>
      <h2>airbnb</h2>

      <div>
        <button>Login</button>
        <button>Signup</button>
      </div>
    </nav>
  )
}