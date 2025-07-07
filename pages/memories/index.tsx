import { useState, useEffect } from 'react';
import { useMemories } from '@/hooks/useMemories';
import { useAuth } from '@/hooks/useAuth';

export default function Memories() {
  const { user } = useAuth();
  const { uploadMemory, getMemories, deleteMemory, uploading } = useMemories();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [memories, setMemories] = useState<any[]>([]);

  const load = async () => {
    const { memories } = await getMemories();
    setMemories(memories);
  };

  useEffect(() => { if (user) load(); }, [user]);

  const handleUpload = async (e: any) => {
    e.preventDefault();
    if (!file) return;
    await uploadMemory(file, title, description);
    setTitle(''); setDescription(''); setFile(null);
    load();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">📸 My Memories</h1>
      <form onSubmit={handleUpload} className="bg-gray-800 p-6 rounded-xl mb-10">
        <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="mb-4" />
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full mb-2 px-4 py-2 bg-gray-700 text-white rounded-lg" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="w-full mb-4 px-4 py-2 bg-gray-700 text-white rounded-lg" />
        <button type="submit" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white">{uploading ? "Uploading..." : "Upload Memory"}</button>
      </form>

      <div className="grid md:grid-cols-3 gap-6">
        {memories.map((m: any) => (
          <div key={m.id} className="bg-gray-800 rounded-xl overflow-hidden">
            <img src={m.imageUrl} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{m.title}</h3>
              <p className="text-gray-400 text-sm">{m.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
