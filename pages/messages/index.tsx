import { useState } from 'react';

export default function Messages() {
  const [message, setMessage] = useState('');
  const [log, setLog] = useState<string[]>([]);

  const handleSend = (e: any) => {
    e.preventDefault();
    if (message.trim()) {
      setLog([...log, message]);
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">💬 Messages</h1>
      <div className="bg-gray-800 p-6 rounded-xl max-w-xl mx-auto mb-8">
        <form onSubmit={handleSend} className="flex gap-4">
          <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type a message" className="flex-1 px-4 py-3 bg-gray-700 text-white rounded-lg" />
          <button type="submit" className="bg-red-600 px-4 py-2 rounded-lg">Send</button>
        </form>
      </div>
      <div className="max-w-xl mx-auto space-y-2">
        {log.map((msg, i) => (
          <div key={i} className="bg-gray-800 rounded-lg p-3">{msg}</div>
        ))}
      </div>
    </div>
  );
}
