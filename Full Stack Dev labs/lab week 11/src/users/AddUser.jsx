import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import api from "../api"

export default function AddUser() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [saving, setSaving] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setMessage("")
        setSaving(true)

        try {
            const response = await api.post("/users", {
                name: name,
                email: email
            })

            console.log(response.data)

            setMessage("User submitted successfully!")
            setName("")
            setEmail("")
        } catch (err) {
            setMessage("Could not add user: " + err.message)
        } finally {
            setSaving(false)
        }
    }

    return (
        <div>
            <h2>Add New User</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </div>

                <br />

                <div>
                    <label htmlFor="email">Email: </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                </div>

                <br />

                <button type="submit" disabled={saving}>
                    {saving ? "Saving..." : "Add User"}
                </button>
            </form>

            <p>{message}</p>

            <Link to="/users">Back to Users</Link>
        </div>
    )
}
