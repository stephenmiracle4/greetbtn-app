import React from "react"
import GreetBtn from './Components/greetBtn'
import './App.css';
import Counter from './Components/counter';
import InputField from './Components/inputField'
import Home from "./Components/Home";
import Student from "./Components/Student";
import UserForm from "./Components/userForm";

function App() {
  return (
    <>
      <GreetBtn name="Join us here" onclick={() => alert("Hello")}/>
      <h1>Hello</h1>
      <Counter/>
      <GreetBtn name="Contact us" onclick={() => alert("Go to contact")}/>
      <InputField/>
      <Home/>
      <Student name="Miracle" age={25} isStudent={true}/>
      <UserForm/>
    </>
  );
}

export default App;