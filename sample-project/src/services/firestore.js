
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
  orderBy, 
  serverTimestamp,
  Timestamp
} from "firebase/firestore";

// Collection reference
const blogsCollection = collection(db, "blogs");

// Get all blogs sorted by date (newest first)
export const getAllBlogs = async () => {
  try {
    const q = query(blogsCollection, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      // Convert Firestore timestamp to string date format
      date: doc.data().createdAt 
        ? new Date(doc.data().createdAt.toDate()).toLocaleDateString('en-US', {
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
          })
        : new Date().toLocaleDateString('en-US', {
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
          })
    }));
  } catch (error) {
    console.error("Error getting blogs: ", error);
    throw error;
  }
};

// Get a single blog by ID
export const getBlogById = async (id) => {
  try {
    const docRef = doc(db, "blogs", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      const blogData = docSnap.data();
      return {
        id: docSnap.id,
        ...blogData,
        // Convert Firestore timestamp to string date format
        date: blogData.createdAt 
          ? new Date(blogData.createdAt.toDate()).toLocaleDateString('en-US', {
              year: 'numeric', 
              month: 'long', 
              day: 'numeric'
            })
          : new Date().toLocaleDateString('en-US', {
              year: 'numeric', 
              month: 'long', 
              day: 'numeric'
            })
      };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting blog: ", error);
    throw error;
  }
};

// Add a new blog
export const addBlog = async (blogData) => {
  try {
    const docRef = await addDoc(blogsCollection, {
      ...blogData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding blog: ", error);
    throw error;
  }
};

// Update an existing blog
export const updateBlog = async (id, blogData) => {
  try {
    const docRef = doc(db, "blogs", id);
    await updateDoc(docRef, {
      ...blogData,
      updatedAt: serverTimestamp()
    });
    return true;
  } catch (error) {
    console.error("Error updating blog: ", error);
    throw error;
  }
};

// Delete a blog
export const deleteBlog = async (id) => {
  try {
    const docRef = doc(db, "blogs", id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error("Error deleting blog: ", error);
    throw error;
  }
};
