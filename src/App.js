import React from 'react';

import './App.css';
import { app } from './base';

function App() {
	const onChange = (e) => {
		// we use the name of our file from the input to create a file name on firestore
		//then we use fileRef to actually add the data
		const file = e.target.files[0];
		const storageRef = app.storage().ref();
		const fileRef = storageRef.child(file.name);
		fileRef.put(file).then(() => {
			console.log('Uploaded a file.');
		});
	};
	return <input type='file' onChange={onChange} />;
}

export default App;
