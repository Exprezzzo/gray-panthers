import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const router = useRouter();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    setUserName('Welcome back, Mary');
  }, []);

  const features = [
    { icon: '🚨', title: 'Emergency', desc: 'Quick access to help', link: '/emergency', color: 'bg-red-600' },
    { icon: '💬', title: 'Messages', desc: '3 new messages', link: '/messages', color: 'bg-blue-600' },
    { icon: '📸', title: 'Memories', desc: 'Share photos', link: '/memories', color: 'bg-purple-600' },
    { icon: '📅', title: 'Events', desc: 'Upcoming activities', link: '/events', color: 'bg-green-600' },
    { icon: '👥', title: 'Invites', desc: 'Connect with family', link: '/invites', color: 'bg-orange-600' },
    { icon: '⚙️', title: 'Profile', desc: 'Your settings', link: '/profile', color: 'bg-gray-600' },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl">🦅</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Gray Panthers</h1>
              <p className="text-gray-400 text-sm">{userName}</p>
            </div>
          </div>
          <button 
            onClick={() => router.push('/signin')}
            className="text-gray-400 hover:text-white transition"
          >
            Sign Out
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Need Help?</h2>
          <p className="text-red-100 mb-6">Press the emergency button for immediate assistance</p>
          <Link href="/emergency" className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
            <span className="text-2xl">🚨</span>
            Emergency Alert
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Link key={feature.link} href={feature.link} className="group">
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition">
                <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
