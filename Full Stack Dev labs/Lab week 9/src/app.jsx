/*
Here we will define the top level application for react
*/

import React from "react"
import College from "./components/college.jsx"
import Student from "./components/Student.jsx"

const title = "React using Vite"
const titleStyle = { color: "teal" }
const courses = ["Javascript", "React", "Node.js"]

function App() {
  return (
    <article>
      <h1 style={titleStyle}>{title}</h1>

      <ul>
        {courses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>

      <College name="GBP" city="Toronto" />
      <Student firstname="Judene" lastname="Brown" />
    </article>
  )
}

export default App