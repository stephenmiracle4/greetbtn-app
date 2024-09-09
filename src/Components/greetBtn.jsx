import React from 'react'

function GreetBtn({name, onclick}) {
  return (
    <div>
    <button onclick={onclick}>{name}</button>
    </div>
  )
}

export default GreetBtn