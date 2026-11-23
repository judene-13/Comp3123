import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <article>
            <h2>Home Page</h2>
            <p>Axios handles API requests and React Router handles navigation.</p>

            <Link to="/users">View all users</Link>
        </article>
    )
}
