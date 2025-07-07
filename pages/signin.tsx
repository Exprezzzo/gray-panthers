import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';

export default function SignIn() {
  const { signIn } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await signIn(email, password);
    if (error) {
      setError(error);
      setLoading(false);
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">🔐 Sign In</h1>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-xl w-full max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-3 bg-gray-700 text-white rounded-lg"
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-3 bg-gray-700 text-white rounded-lg"
          placeholder="Password"
          required
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button disabled={loading} className="w-full bg-red-600 hover:bg-red-700 px-6 py-3 text-white font-semibold rounded-lg">
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
}
