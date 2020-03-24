import React from 'react';
import PropTypes from 'prop-types';
import {names} from './file2.js'
import { render } from '@testing-library/react';

  class Welcome extends React.Component {
      render(){
        const name = this.props.name;
        return <h1>Hello, {name}</h1>;
      }
  }

  Welcome.propTypes = {
    name: PropTypes.string.isRequired
  };

  function WelcomePerson(props){
    let {firstName, lastName, email} = props.person;
    return <h1>Hello, {firstName} {lastName}, also known by {email}</h1>;
  }
  
  function App() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        {/* These who values causes an error, but is still printed. This seems to still be allowed in the assignment. */}
        {/* <Welcome />
        <Welcome name={45} /> */}

        <WelcomePerson person={names[0]}  />
        <WelcomePerson person={names[1]}  />
        <WelcomePerson person={names[2]}  />
      </div>
    );
  }
  
  export default App;