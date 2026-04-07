import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const loginUser = async (email, password) => {
  const q = query(
    collection(db, "users"),
    where("email", "==", email),
    where("password", "==", password)
  );

  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) return querySnapshot.docs[0].data();
  throw new Error("Invalid email or password");
};
