{

/* ========================
  Variables
======================== */

const FIREBASE_AUTH = firebase.auth();
const FIREBASE_MESSAGING = firebase.messaging();
const FIREBASE_DATABASE = firebase.database();

const signInButton = document.getElementById('sign-in');
const signOutButton = document.getElementById('sign-out');
const subscribeButton = document.getElementById('subscribe');
const unsubscribeButton = document.getElementById('unsubscribe');

/* ========================
  Event Listeners
======================== */

signInButton.addEventListener("click", signIn);

/* ========================
  Functions
======================== */
function signIn() {
  FIREBASE_AUTH.signInWithPopup(new firebase.auth.GoogleAuthProvider());
}
}