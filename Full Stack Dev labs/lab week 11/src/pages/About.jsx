import React from "react"
import { useSearchParams } from "react-router-dom"

export default function About() {
    const [searchParams] = useSearchParams()
    const college = searchParams.get("college")

    return (
        <article>
            <h2>About Us</h2>
            <p>College name: {college ?? "not provided"}</p>
        </article>
    )
}
