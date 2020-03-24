import React from 'react';
import './App.css';
import file2, {males, females} from './file2.js';

let {firstName, email} = file2;
// let personV2 = {
//     ...file2, 
//     friends: [...males, ...females], 
//     phone: 123456};

let personV2 = {
    email: file2.email, 
    firstName: file2.email,
    friends: [...males, ...females], 
    gender: file2.gender,
    lastName: file2.lastName,
    phone: 123456};

function App(){
    console.log([...males, ...females]);
    console.log([...males, "Kurt", "Helle", ...females, "Tina"]);
    console.log(personV2);

    return(
        <div className="App">
            <h3>App 2</h3>
            <p>{firstName}, {email}</p>
        </div>
    );
}

export default App;