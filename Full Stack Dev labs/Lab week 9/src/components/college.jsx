import React from "react"

function College({ name, city }) {
  return (
    <section className="card">
      <h2>{name}, {city}</h2>
    </section>
  )
}

export default College