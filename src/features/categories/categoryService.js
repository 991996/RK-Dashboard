import { db } from "@/lib/firebase";
import {
  setDoc,
  collection,
  serverTimestamp,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

// CREATE CATEGORY
export const createCategory = async (category) => {
  try {
    const docRef = doc(collection(db, "categories")); // هنا ينشئ الـ docRef مع id
    const newCategory = {
      ...category,
      id: docRef.id,
      images: ["https://techzaa.in/larkon/admin/assets/images/product/p-6.png"],
      createdAt: serverTimestamp(),
    };

    await setDoc(docRef, newCategory);

    return newCategory;
  } catch (error) {
    console.log("Error While adding a category", error);
    throw error;
  }
};

// get all categories list
export const fetchCategories = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const categoriesArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return categoriesArray;
  } catch (error) {
    console.log("Error while get the categories: ", error);
    return [];
  }
};

// Delete Category
export const deleteCategory = async (id) => {
  await deleteDoc(doc(db, "categories", id));
};

// get CATEGORY by id
export const fetchCategory = async (id) => {
  try {
    const docRef = doc(db, "categories", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) return null;

    return {
      id: docSnap.id,
      ...docSnap.data(),
    };
  } catch (error) {
    console.error("Error fetching category:", error);
    throw error;
  }
};

// Edit Category
export const updateCategory = async (id, data) => {
  const categoryRef = doc(db, "categories", id);
  await updateDoc(categoryRef, data);
};
