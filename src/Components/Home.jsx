import React, {useState} from 'react'

const Home = () => {
  const[name, setName] = useState('Miracle')
  const[age, setAge] = useState(25)
  
  const handleclick = () => {
    setName('Stehpen')
    setAge(30)
  }
  return (
    <div>Home
      <h2>Homepage</h2>
      <p>{ name } is { age } years old</p>
      <button onClick={handleclick}>CLICK ME</button>
    </div>
  )
}

export default Home