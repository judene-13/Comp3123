import { NavLink, Route, Routes } from "react-router-dom"
// Import /pages About, Home, and NotFound
// import /users functions for UserList, UserDetails, and AddUser

export default function App() {
    return (
        <section>
            <h1>Lab 9 - Week 11 - Use React Router and Axios API handler</h1>
            <nav>
                <NavLink to="/">Home</NavLink> | {" "}
                <NavLink to="/about?college=GBC">About</NavLink> | {" "}
                {/* NavLink is a jsx component that we are instantiating
                    similar to the syntax = new NavLink("/users", true)
                */}
                <NavLink to="/users" end>Users</NavLink> | {" "}
                <NavLink to="users/add"></NavLink>
            </nav>
            <hr />
            <Routes>
                <Route path="/" element="{<Home />}" />
                <Route path="/about" element={<About />} />

                <Route path="/users" element={<UserList />} />
                <Route path="/users/add" element={<AddUser />} />

                <Route path="/users/:id" element={<UserDetails />} />

                {/* Symbol "*" will match any other pages not above */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </section>
    )
}