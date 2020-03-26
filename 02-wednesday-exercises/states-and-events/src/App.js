import React, {useState, useEffect, useInterval} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>State and Events with React</h1>
      <AssignmentOne 
      startCount={4}
      increaseAmount={4}
      />
      <br/>
      <AssignmentTwo/>
      <br/>
      <AssignmentThree/>
    </div>
  );
}

function AssignmentOne (props) {
  const[count, setCount]=useState(Number(props.startCount) ? props.startCount : 0);
  const increase = Number(props.increaseAmount) ? props.increaseAmount : 1;

  function increaseCount(){
    setCount(count + increase);
  }

  function decreaseCount(){
    setCount(count - 1);
  }

  return (
  <p>Count is at {count}<br/>
  <button onClick={increaseCount}>Count Up by {increase}</button>
  <button onClick={decreaseCount}>Count Down by 1</button>
  </p>
  );
}

function AssignmentTwo () {
  const[time, setTime]=useState();

  useEffect(()=>{
    setInterval(() => {setTime(new Date().toLocaleTimeString())}, 1000);
  });

  return(<>
    <p>The time is:  {time}</p>
  </>);
}

function AssignmentThree(){
  const[joke, setJoke] = useState('Chuck Norris Joke will be here!');
  const[otherJoke, setOtherJoke] = useState('Here comes a \'good\' dad joke...');

  const getChuckNorris = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(data => {console.log(data.value);setJoke(data.value)});
  }

  useEffect(()=>{
    setInterval(()=>{
      let options = {
        method: 'GET',
        headers: {
          Accept: 'application/json'
        }
      }
      fetch('https://icanhazdadjoke.com/', options)
      .then(res => res.json())
      .then(data => {console.log(data.joke);setOtherJoke(data.joke)});
    },10000);
  },[]);

  return (<>
    <p>Get your Chuck Norris Joke here!</p>
    <button onClick={getChuckNorris}>Get Joke</button><br/><br/>
    <i>{joke}</i><br/><br/><br/>
    <p>Another joke here!</p>
    <i>{otherJoke}</i>
  </>);
}

export default App;
