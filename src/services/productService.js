import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { productImages } from "@/data/productList";

// CREATE PRODUCT
export const createProduct = async (product) => {
  try {
    // add created time to product
    const docRef = await addDoc(collection(db, "products"), {
      ...product,
      images: productImages,
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
      firestoreId: doc.id,
      ...doc.data(),
    }));
    return productsArray;
  } catch (error) {
    console.log("Error while get the products: ", error);
    return [];
  }
};

// Delete Product
export const deleteProduct = async (id) => {
  await deleteDoc(doc(db, "products", id));
};

// get product by id
export const fetchProduct = async (id) => {
  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) return null;

    return {
      firestoreId: docSnap.id,
      ...docSnap.data(),
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

// Edit product
export const updateProduct = async (id, data) => {
  const productRef = doc(db, "products", id);
  await updateDoc(productRef, data);
};
