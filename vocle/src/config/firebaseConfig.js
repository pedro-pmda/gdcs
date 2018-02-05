import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyCp7lRxidZjf1W_0ycmnx2B7f23xMUiXaQ',
  authDomain: 'vocle-6228d.firebaseapp.com',
  databaseURL: 'https://vocle-6228d.firebaseio.com',
  projectId: 'vocle-6228d',
  storageBucket: 'vocle-6228d.appspot.com',
  messagingSenderId: '696767717356'
}

Firebase.initializeApp(config)
/* This feature is about Authenticathin.  At the moment no use it
    export function firebaseListener(func) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
        console.log("User log in success", user);
        func(true, user)
        } else {
        console.log("User log in failed", user);
        func(false)
        }
    }, function(error) {
        console.log(error)
    });
    }
    export const firebaseAuth = firebase.auth;
*/
export default Firebase.database()
