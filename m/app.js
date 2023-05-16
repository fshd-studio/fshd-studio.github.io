// app.js

// Get a reference to the Firestore database
const db = firebase.firestore();

// Define a function to get the messages from Firestore and save them in a cookie
function getMessagesFromFirestoreAndSaveInCookie() {
  // Get all documents from the "messages" collection
  db.collection("messages").get().then(querySnapshot => {
    // Loop through each document
    querySnapshot.forEach(doc => {
      // Save the data in a cookie with a unique name
      document.cookie = `message-${doc.id}=${JSON.stringify(doc.data())}; expires=${new Date(Date.now() + 24 * 60 * 60 * 1000)}; path=/`;
    });
  })
  .catch(error => {
    console.log("Error getting documents: ", error);
  });
}

// Call the function when the page loads
window.onload = () => {
  getMessagesFromFirestoreAndSaveInCookie();
}
