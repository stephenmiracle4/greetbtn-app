import React, {useState} from "react";

function InputField() {
  const [name, setName] = useState ("")
  return (
    <div>
      inputField
    <form action="">
      <label>Enter Your Name
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <input type="button" value="text" />
    </label>
</form>
</div>
  )
}

export default InputField