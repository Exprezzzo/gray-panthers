import { useState } from 'react';
import { db, storage, auth } from '@/lib/firebase';
import {
  collection, addDoc, query, where, orderBy, getDocs, deleteDoc, doc
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export function useMemories() {
  const [uploading, setUploading] = useState(false);

  const uploadMemory = async (file: File, title: string, description: string) => {
    if (!auth.currentUser) return { error: 'Not authenticated' };
    setUploading(true);
    try {
      const filePath = `memories/${auth.currentUser.uid}/${Date.now()}_${file.name}`;
      const fileRef = ref(storage, filePath);
      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);
      const memory = {
        title,
        description,
        imageUrl: url,
        userId: auth.currentUser.uid,
        createdAt: new Date()
      };
      const docRef = await addDoc(collection(db, 'memories'), memory);
      setUploading(false);
      return { id: docRef.id, error: null };
    } catch (error: any) {
      setUploading(false);
      return { id: null, error: error.message };
    }
  };

  const getMemories = async () => {
    if (!auth.currentUser) return { memories: [], error: 'Not authenticated' };
    try {
      const q = query(collection(db, 'memories'), where('userId', '==', auth.currentUser.uid), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const memories = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      return { memories, error: null };
    } catch (error: any) {
      return { memories: [], error: error.message };
    }
  };

  const deleteMemory = async (memoryId: string) => {
    try {
      await deleteDoc(doc(db, 'memories', memoryId));
      return { error: null };
    } catch (error: any) {
      return { error: error.message };
    }
  };

  return { uploadMemory, getMemories, deleteMemory, uploading };
}
