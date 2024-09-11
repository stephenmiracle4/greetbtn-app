import React from "react"
import GreetBtn from './Components/greetBtn'
import './App.css';
import Counter from './Components/counter';
import InputField from './Components/inputField'

function App() {
  return (
    <>
      <GreetBtn name="Join us here" onclick={() => alert("Hello")}/>
      <h1>Hello</h1>
      <Counter/>
      <GreetBtn name="Contact us" onclick={() => alert("Go to contact")}/>
      <InputField/>
    </>
  );
}

export default App;