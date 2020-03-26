import React, {useState} from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Lifting State Up 2</h1>
      <Parent/>
    </div>
  );
}

const parentborder = {
  width: '600px',
  margin: 'auto'
}

const listborder = {
  border: '1px solid black',
  width: '200px',
  float: 'left'
}

const newpersonborder = {
  border: '1px solid black',
  width: '300px',
  float: 'left'
}

function Parent(){
  const initialList = [
    {id: 1, name: 'Jackson'},
    {id: 2, name: 'Peterson'},
    {id: 3, name: 'Nielson'},
    {id: 4, name: 'Jefferson'}
  ];
  const[list, setList] = useState(initialList);

  const addPerson = (name) => {
    // let newList = [...list, {id: 5, name}];
    // console.log(newList);
    setList([...list, {id: newHighestIndex, name}]);
  };

  let newHighestIndex = list.length + 1;

  return(
    <div style={parentborder}>
      <p>Total Persons: {list.length}</p>
      <div style={listborder}>
        <PersonList newList={list}/>
      </div>
      <div style={newpersonborder}>
        <NewPerson addPerson={addPerson}/>
      </div>
    </div>
  );
}

const PersonList = ({newList}) => {
  return(
    <table border='1' width='100%'>
      <tr>
        <th>ID</th>
        <th>Name</th>
      </tr>
      {newList.map(person => {
        return (
        <tr key={person.id}>
          <td>{person.id}</td>
          <td>{person.name}</td>
        </tr>
      );})}
    </table>
  )
}

const NewPerson = ({addPerson}) => {
  const[name, setName] = useState("");

  const savePerson = (evt) => {
    evt.preventDefault();
    addPerson(name);
    setName("");
  }

  return(
    <form>
      <input type='text' placeholder='Type name here' value={name} onChange={e => setName(e.target.value)}/>
      <input type='submit' value='Submit' onClick={savePerson}/>
    </form>
  );
}

export default App;
