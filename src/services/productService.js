import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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
