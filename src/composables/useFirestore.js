import { ref } from 'vue';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from '@/config/firebase';

export function useFirestore(collectionName) {
  const documents = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const fetchDocuments = async () => {
    loading.value = true;
    error.value = null;
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      documents.value = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const addDocument = async (data) => {
    try {
      await addDoc(collection(db, collectionName), data);
    } catch (err) {
      error.value = err.message;
    }
  };

  const deleteDocument = async (id) => {
    try {
      await deleteDoc(doc(db, collectionName, id));
    } catch (err) {
      error.value = err.message;
    }
  };

  return {
    documents,
    loading,
    error,
    fetchDocuments,
    addDocument,
    deleteDocument,
  };
}
