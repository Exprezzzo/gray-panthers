import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-800'>
      <header className='bg-black/20 backdrop-blur-sm border-b border-gray-700'>
        <div className='max-w-6xl mx-auto px-4 py-4 flex items-center justify-between'>
          <h1 className='text-2xl font-bold text-white'>Gray Panthers</h1>
          <Link href='/signin' className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition'>
            Sign In
          </Link>
        </div>
      </header>

      <main className='max-w-6xl mx-auto px-4 py-16'>
        <div className='text-center mb-16'>
          <h2 className='text-5xl font-bold text-white mb-6'>
            Empowering Seniors Through Technology
          </h2>
          <p className='text-xl text-gray-300 mb-8'>
            Connect, share memories, and stay safe with Gray Panthers
          </p>
          <div className='flex gap-4 justify-center'>
            <Link href='/signin' className='bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg'>
              Get Started
            </Link>
            <Link href='/about' className='bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg text-lg'>
              Learn More
            </Link>
          </div>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          <div className='bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition'>
            <div className='text-4xl mb-4'>🚨</div>
            <h3 className='text-xl font-bold text-white mb-2'>Emergency Alerts</h3>
            <p className='text-gray-400'>One-touch emergency assistance when you need it most</p>
          </div>
          <div className='bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition'>
            <div className='text-4xl mb-4'>💬</div>
            <h3 className='text-xl font-bold text-white mb-2'>Easy Messaging</h3>
            <p className='text-gray-400'>Stay connected with family and friends</p>
          </div>
          <div className='bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition'>
            <div className='text-4xl mb-4'>📸</div>
            <h3 className='text-xl font-bold text-white mb-2'>Memory Sharing</h3>
            <p className='text-gray-400'>Preserve and share your precious memories</p>
          </div>
        </div>
      </main>
    </div>
  );
}
