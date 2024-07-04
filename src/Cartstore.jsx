// cartFunctions.js
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "./firebaseConfig";

// Function to add an item to the cart
export const addToCart = async (item) => {
  const user = auth.currentUser;

  if (user) {
    try {
      await addDoc(collection(db, "carts"), {
        uid: user.uid,
        item: item,
        createdAt: new Date(),
      });
      console.log("Item added to cart!");
    } catch (e) {
      console.error("Error adding item to cart: ", e);
    }
  } else {
    console.log("User is not authenticated");
  }
};

// Function to fetch cart items for the current user
export const fetchCartItems = async () => {
  const user = auth.currentUser;
  const items = [];

  if (user) {
    const q = query(collection(db, "carts"), where("uid", "==", user.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
  }

  return items;
};
