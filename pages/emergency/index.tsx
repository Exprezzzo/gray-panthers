export default function Emergency() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12 text-center">
      <h1 className="text-4xl font-bold mb-6">🚨 Emergency Alert</h1>
      <p className="text-lg text-gray-300 mb-8">
        Press the button below to send an immediate emergency alert.
      </p>
      <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-xl font-bold rounded-lg transition">
        Send SOS Alert
      </button>
    </div>
  );
}
