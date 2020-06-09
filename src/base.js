import * as firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyD0Mw1Be9Q5OzJuku6GdUhmVYaO1J9bp-E',
	authDomain: 'ff-uploads.firebaseapp.com',
	databaseURL: 'https://ff-uploads.firebaseio.com',
	projectId: 'ff-uploads',
	storageBucket: 'ff-uploads.appspot.com',
	messagingSenderId: '858124928883',
	appId: '1:858124928883:web:081bb95be0323f56d3e706',
};
// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
