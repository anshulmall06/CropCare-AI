export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-green-700 text-white p-4">
        <h1 className="text-2xl font-bold">🌱 Crop Disease Detection</h1>
      </div>

      <h1 className="text-center text-5xl font-bold mt-10">
        Prediction History
      </h1>

      <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl shadow mt-10">
        <table className="w-full border">
          <thead>
            <tr className="bg-green-100">
              <th className="border p-3">Date</th>
              <th className="border p-3">Crop</th>
              <th className="border p-3">Disease</th>
              <th className="border p-3">Confidence</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-3">--</td>
              <td className="border p-3">--</td>
              <td className="border p-3">--</td>
              <td className="border p-3">--</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}