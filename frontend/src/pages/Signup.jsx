export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Signup
        </h2>

        <form className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg"
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-3 rounded-lg"
          />

          <button
            type="submit"
            className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600"
          >
            Signup
          </button>

        </form>

      </div>

    </div>
  )
}