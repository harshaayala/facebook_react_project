import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDMCttLmukVQxmvaRDfVPr5aTqP1vK4L64",
    authDomain: "facebook-clone-e3f8d.firebaseapp.com",
    databaseURL: "https://facebook-clone-e3f8d.firebaseio.com",
    projectId: "facebook-clone-e3f8d",
    storageBucket: "facebook-clone-e3f8d.appspot.com",
    messagingSenderId: "326258550411",
    appId: "1:326258550411:web:557129c1988cac4428d68e"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  export {auth,provider}
  export default db;