import React from "react"
import { NavLink, Route, Routes } from "react-router-dom"

import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import NotFound from "./pages/NotFound.jsx"

import UserList from "./users/UserList.jsx"
import UserDetails from "./users/UserDetails.jsx"
import AddUser from "./users/AddUser.jsx"

export default function App() {
    return (
        <div style={{ padding: "20px" }}>
            <h1>Lab 11 - React Router and Axios</h1>

            <nav>
                <NavLink to="/">Home</NavLink>
                {" | "}
                <NavLink to="/about?college=GBC">About</NavLink>
                {" | "}
                <NavLink to="/users">Users</NavLink>
                {" | "}
                <NavLink to="/users/add">Add User</NavLink>
            </nav>

            <hr />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/users/add" element={<AddUser />} />
                <Route path="/users/:id" element={<UserDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}
