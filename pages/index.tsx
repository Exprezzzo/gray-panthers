import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-2xl">🦅</span>
          </div>
          <span className="text-white text-2xl font-bold">Gray Panthers</span>
        </div>
        <Link href="/signin" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full transition">
          Sign In
        </Link>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Empowering Seniors<br />Through Technology
          </h1>
          <p className="text-xl text-gray-400 mb-10">
            Connect, share memories, and stay safe with Gray Panthers
          </p>
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => router.push("/signin")}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-medium transition"
            >
              Get Started
            </button>
            <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-3 rounded-full text-lg font-medium transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/emergency" className="block group">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center hover:border-gray-600 transition">
              <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                <span className="text-3xl">🚨</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Emergency Alerts</h3>
              <p className="text-gray-400">One-touch emergency assistance when you need it most</p>
            </div>
          </Link>

          <Link href="/messages" className="block group">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center hover:border-gray-600 transition">
              <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Easy Messaging</h3>
              <p className="text-gray-400">Stay connected with family and friends</p>
            </div>
          </Link>

          <Link href="/memories" className="block group">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center hover:border-gray-600 transition">
              <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                <span className="text-3xl">📸</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Memory Sharing</h3>
              <p className="text-gray-400">Preserve and share your precious memories</p>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
