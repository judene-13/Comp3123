import React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import api from "../api"

export default function UserList() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await api.get("/users")
                console.log(response.data)
                setUsers(response.data)
            } catch (err) {
                setError("Could not load users: " + err.message)
            } finally {
                setLoading(false)
            }
        }

        getUsers()
    }, [])

    const deleteUser = async (id) => {
        if (!window.confirm(`Delete user ${id}?`)) {
            return
        }

        try {
            await api.delete(`/users/${id}`)
            setUsers((currentUsers) =>
                currentUsers.filter((user) => user.id !== id)
            )
        } catch (err) {
            alert("Delete failed: " + err.message)
        }
    }

    if (loading) {
        return <p>Loading users...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div>
            <h2>User List</h2>

            <Link to="/users/add">Add New User</Link>

            <table
                border="1"
                cellPadding="10"
                style={{ marginTop: "15px", borderCollapse: "collapse" }}
            >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/users/${user.id}`}>
                                    View
                                </Link>
                                {" "}
                                <button onClick={() => deleteUser(user.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
