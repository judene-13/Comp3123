import React from "react"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import api from "../api"

export default function UserDetails() {
    const { id } = useParams()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await api.get(`/users/${id}`)
                setUser(response.data)
            } catch (err) {
                setError("Could not load user: " + err.message)
            } finally {
                setLoading(false)
            }
        }

        getUser()
    }, [id])

    if (loading) {
        return <p>Loading user details...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    if (!user || !user.id) {
        return <p>User not found.</p>
    }

    return (
        <div>
            <h2>User Details</h2>

            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>

            <Link to="/users">Back to Users</Link>
        </div>
    )
}
