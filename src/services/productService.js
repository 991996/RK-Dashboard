import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
} from "firebase/firestore";

// CREATE PRODUCT
export const createProduct = async (product) => {
  try {
    // add created time to product
    const docRef = await addDoc(collection(db, "products"), {
      ...product,
      images: [],
      createdAt: serverTimestamp(),
    });

    console.log("Document written with ID:", docRef.id);

    return docRef.id;
  } catch (error) {
    console.error("Firestore error:", error);
    throw error;
  }
};

// get all products list
export const fetchProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productsArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return productsArray;
  } catch (error) {
    console.log("Error while get the products: ", error);
    return [];
  }
};
