import logo from "./logo.svg"
import "./App.css"

function Student({ studentId, firstname, lastname }) {
  return (
    <>
      <h3>{studentId}</h3>
      <h4>{firstname} {lastname}</h4>
    </>
  )
}

function College({ name, city }) {
  return <h5>{name}, {city}</h5>
}

function App() {
  return (
    <main className="App">
      <img className="App-logo" src={logo} alt="React logo" />

      <h1>Welcome to Fullstack Development - I</h1>
      <h2>React JS Programming Week09 Lab exercise</h2>

      <Student
        studentId="101503637"
        firstname="Judene"
        lastname="Brown"
      />

      <College name="George Brown College" city="Toronto" />
    </main>
  )
}

export default App