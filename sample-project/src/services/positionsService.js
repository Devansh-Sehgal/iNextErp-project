
import { db } from "../../firebase";
import { 
  collection, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query,
  where,
  orderBy, 
  serverTimestamp,
} from "firebase/firestore";

// Collection reference
const positionsCollection = collection(db, "positions");

// Get all positions sorted by date (newest first)
export const getAllPositions = async () => {
  try {
    const q = query(positionsCollection, orderBy("postedDate", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      // Format the date if needed
      postedDate: doc.data().postedDate || new Date().toISOString().split('T')[0]
    }));
  } catch (error) {
    console.error("Error getting positions: ", error);
    throw error;
  }
};

// Get positions by category
export const getPositionsByCategory = async (category) => {
  try {
    const q = query(
      positionsCollection, 
      where("category", "==", category),
      orderBy("postedDate", "desc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      postedDate: doc.data().postedDate || new Date().toISOString().split('T')[0]
    }));
  } catch (error) {
    console.error("Error getting positions by category: ", error);
    throw error;
  }
};

// Get a single position by ID
export const getPositionById = async (id) => {
  try {
    const docRef = doc(db, "positions", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const positionData = docSnap.data();
      return {
        id: docSnap.id,
        ...positionData,
        postedDate: positionData.postedDate || new Date().toISOString().split('T')[0]
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting position: ", error);
    throw error;
  }
};

// Add a new position
export const addPosition = async (positionData) => {
  try {
    const docRef = await addDoc(positionsCollection, {
      ...positionData,
      postedDate: new Date().toISOString().split('T')[0]
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding position: ", error);
    throw error;
  }
};

// Update an existing position
export const updatePosition = async (id, positionData) => {
  try {
    const docRef = doc(db, "positions", id);
    await updateDoc(docRef, positionData);
    return true;
  } catch (error) {
    console.error("Error updating position: ", error);
    throw error;
  }
};

// Delete a position
export const deletePosition = async (id) => {
  try {
    const docRef = doc(db, "positions", id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting position: ", error);
    throw error;
  }
};
