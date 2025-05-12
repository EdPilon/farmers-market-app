import { db } from '@/config/firebase';
import { collection, doc, setDoc } from 'firebase/firestore';

// Function to set up initial Firestore collections and documents
export async function initializeFirestoreCollections() { // Renamed function
  try {
    // Add a sample vendor
    const vendorRef = doc(collection(db, 'vendors'));
    await setDoc(vendorRef, {
      name: 'Fresh Farms',
      location: '123 Market St',
      contact: 'freshfarms@example.com',
      products: [] // Array of product IDs
    });

    // Add a sample product
    const productRef = doc(collection(db, 'products'));
    await setDoc(productRef, {
      name: 'Organic Apples',
      price: 3.99,
      category: 'Fruits',
      vendorId: vendorRef.id
    });

    // Add a sample user
    const userRef = doc(collection(db, 'users'));
    await setDoc(userRef, {
      name: 'John Doe',
      email: 'johndoe@example.com',
      favorites: [vendorRef.id] // Array of vendor or product IDs
    });

    // Add a sample order
    const orderRef = doc(collection(db, 'orders'));
    await setDoc(orderRef, {
      userId: userRef.id,
      items: [
        { productId: productRef.id, quantity: 2 }
      ],
      totalPrice: 7.98,
      status: 'Pending'
    });

    console.log('Firestore setup completed successfully!');
  } catch (error) {
    console.error('Error setting up Firestore:', error);
  }
}