import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore();

const sendMessage = async (message) => {
    await db.collection('messages').add({
        text: message,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
};
