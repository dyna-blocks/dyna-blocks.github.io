// profile.js
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore();

// Get user ID from URL
const params = new URLSearchParams(window.location.search);
const userId = params.get("ID");

async function loadProfile() {
  if (!userId) {
    document.body.innerHTML = "<h2>User ID not provided.</h2>";
    return;
  }

  const userRef = doc(db, "users", userId);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const userData = userSnap.data();
    document.getElementById("username").textContent = userData.username;
    document.getElementById("userId").textContent = userData.userId;
    document.getElementById("profileImage").src = userData.profileImage;
    document.getElementById("bio").textContent = userData.bio;
  } else {
    document.body.innerHTML = "<h2>User not found.</h2>";
  }
}

loadProfile();
