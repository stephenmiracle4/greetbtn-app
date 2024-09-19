import React, {useState} from 'react'
import '../Style/form.css'

function UserForm() {
    const [name, setName] = useState("")
  return (
    <div>
        userForm
        <form action="">
            <label>Enter Your Name
            <input type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            </label>
        </form>
    </div>
  )
}

export default UserForm