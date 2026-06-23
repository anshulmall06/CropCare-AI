export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-center mb-6">
          Crop Disease Detection
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
        />

        <a
          href="/home"
          className="block text-center bg-green-700 text-white py-3 rounded"
        >
        </a>

        <p className="text-center mt-4">
          Don't have an account?
          <a
            href="/signup"
            className="text-green-700 font-semibold ml-1"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}