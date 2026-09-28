import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react';
// if we have no default class we must use this 
// import {Model} from './Car.js' ;

//whereas if we have a default class we use this
//import Model, {Car,and whatever classes we have in the file} from './Car.js' ;
// we insert the Model class before as it is the main class coming outta the file.

import {Model} from './Car.js' ;
import './index.css'
import App from './App.jsx' 
const myelement = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elsa</td>
    </tr>
  </table>
);
function Son(props) {
  return (
    <div style={{background: 'pink'}}>
      <h2>Son</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Daughter(props) {
  const {brand, model} = props;
  return (
    <div style={{background: 'purple'}}>
      <h2>Daughter</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Parent() {
  return (
    <div>
      <h1>My two Children</h1>
      <Son>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Son component
        </p>
      </Son>
      <Daughter>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Daughter component
        </p>
      </Daughter>
    </div>
  );
}

// var is global here
//  var car= new Model("BMW","Mustang");

// const, let and var will behave the same when used in classes
const car= new Model("BMW","Mustang");

car.brand="Mercedes"
car.model="GX"

// we can use newValue as a global var even though it is defined within a block
{
  var newValue=13
}

function hello(){
  var sayHello="Hello"
  return sayHello;
}
//causes a silent error 
// sayhello="Hi"

// var and const must not be used the same way for usual variables unlike classes
// the value we assign is now constant thus must never be modified
const myValue=15
// an error will occur silently
// myValue=12

const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 }
];

const fruitlist = ['apple', 'banana', 'cherry'];

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  car: {
    brand: 'Ford',
    model: 'Mustang',
  }
};

// Destructuring
let {firstName, car: { brand, model }} = person;

let message = `My name is ${firstName}, and I drive a ${brand} ${model}.`;
function Greeting({ name, age }) {
  return <p>Hello, {name}! You are {age} years old.</p>;
}
function Football(){
  const shoot=(shot,b)=>{
    alert(`${shot}\nEvent type: ${b.type}s`);
     /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  }
return (
  <button style={{ padding: '12px 24px', fontSize: '18px', cursor: 'pointer' }} 
  onClick={(event)=>shoot("Goal!",event)}>Take the shot</button>
)

}
function Car(props) {
  return (
    <>
      {props.brand && <h1>My car is a {props.brand}!</h1>}
    </>
  );
}
function MyForm() {
  const [inputValue, setInputValue]=useState('');
  const clicked=(event)=>{
    event.preventDefault();
    alert(`Submitted text: ${inputValue}`);
  }
   const handleChange = (event) => {
    // 2. Extract the text value from the event object
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={clicked}>
      <label>Enter your name:
        <input type="text" value={inputValue} onChange={handleChange} />
        
      </label>
<button type="submit">Submit</button>
      <p>Live Preview: {inputValue}</p>
    </form>
  )
}

createRoot(document.getElementById('root')).render(
 <>
 <MyForm/>
 <Football/>
  <h1>Hello React!</h1>
  <p>Welcome!</p>
  <Car brand="Ford"/>
 <Greeting  name="John" age={21}/>
 <p>parent content:</p>
 <Daughter children="She has a son"/>
  <Parent/>
  {myelement}
  <p>{car.show()}</p>
  
  <p>{myValue}</p>
  <p>{newValue}</p>
  <ul>
    {users.map(user=><li key={user.id}>
      {user.name} is {users.age} years old
    </li>)}
  </ul>
   <ul>
      {fruitlist.map((fruit, index, array) => {
        return (
          <li key={fruit}>  
            Name: {fruit}, Index: {index}, Array: {array.join(', ')}
          </li>
        );
      })}
    </ul>
    <p>{message}</p>
 </>
 
 
)
