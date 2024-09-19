import React from 'react'

function Student(pros) {
  return (
    <div>Student
        <p>Name: {pros.name}</p>
        <p>Age: {pros.age}</p>
        <p>Student: {pros.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

export default Student