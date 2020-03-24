import React from 'react';
import upper, {text1,text2, text3} from "./file1";
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>App 1</h3>
      <p>{text1}</p><br/>
      <p>{text2}</p><br/>
      <p>{text3}</p><br/>
      <p>{upper(text1)}</p><br/>
    </div>
  );
}

export default App;
