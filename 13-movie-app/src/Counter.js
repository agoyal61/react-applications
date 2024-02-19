import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const Person = (props) => {
  return (
    <>
      <h2>First Name: {props.firstName}</h2>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  );
}


const AppCp = () => {
  const name = 'Adi';
  const isNameShowing = true;
  
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Counter changed to ' + counter);
  }, [counter]);

  return (
    <div className="App">
      <h1>Hello, {isNameShowing ? name : 'React'}!</h1>
      <Person firstName={'Aditya'} lastName={'Kumar'} age={20}/>
      <Person firstName='Ram' lastName="Kumar"  age='30'/>

      <button onClick={() => setCounter((prevCount) => prevCount-1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount+1)}>+</button>
    </div>
  );
}

export default Counter;
