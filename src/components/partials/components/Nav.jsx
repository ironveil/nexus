import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Nav() {
    return (
        <nav>
            <Link to={"/"} className="title">Nexus</Link>
            <h1>History</h1>
            <NavLink to={"/history/britain"}>🇬🇧 Britain</NavLink>
            <NavLink to={"/history/crusades"}>⚔️ Crusades</NavLink>
            <NavLink to={"/history/russia"}>🇷🇺 Russia</NavLink>
            <NavLink to={"/history/exam"}>📘 Exams</NavLink>

            <h1>Computer Science</h1>
            <NavLink to={"/cs/paper1"}>🖥️ Paper One</NavLink>
            <NavLink to={"/cs/paper2"}>🧑‍💻 Paper Two</NavLink>
        </nav>
    )
}