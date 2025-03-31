// signup.js
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const auth = getAuth();
const db = getFirestore();

// Check if the username is taken
async function isUsernameTaken(username) {
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("username", "==", username));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
}

// Signup function
async function signUp(email, password, username) {
  const badWords = ["badword1", "badword2", "badword3"]; // Add more as needed
  if (badWords.some((word) => username.toLowerCase().includes(word))) {
    console.error("Username contains inappropriate words.");
    return;
  }

  if (await isUsernameTaken(username)) {
    console.error("Username already taken.");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const userId = userCredential.user.uid;

    // Randomly assign one of the profile images
    const profileImages = [
      "Figure1.png", "Figure2.png", "Figure3.png", "Figure4.png",
      "Figure5.png", "Figure6.png", "Figure7.png", "Figure8.png"
    ];
    const profilePic = `https://dyna-blocks.github.io/Images/Figure/${profileImages[Math.floor(Math.random() * profileImages.length)]}`;

    // Save user data in Firestore
    await setDoc(doc(db, "users", userId), {
      username: username,
      profileImage: profilePic,
      bio: "",
      userId: userId,
    });

    console.log("User registered and stored:", userId);
  } catch (error) {
    console.error("Signup error:", error.message);
  }
}
