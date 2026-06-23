export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-green-700 text-white p-4">
        <h1 className="text-2xl font-bold">🌱 Crop Disease Detection</h1>
      </div>

      <h1 className="text-center text-5xl font-bold mt-10">
        Farmer Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6 p-10">
        <div className="bg-white p-8 rounded-xl shadow text-center">
          <h2 className="text-5xl font-bold text-green-700">0</h2>
          <p>Total Predictions</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow text-center">
          <h2 className="text-5xl font-bold text-red-600">0</h2>
          <p>Diseased Crops</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow text-center">
          <h2 className="text-5xl font-bold text-blue-600">0</h2>
          <p>Healthy Crops</p>
        </div>
      </div>
    </div>
  );
}