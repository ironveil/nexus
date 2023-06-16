import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"

const mobile = window.matchMedia(`(max-width: 800px)`).matches

function MobileNav({ setShow }) {
    return (
        <div id="mobileNav">
            <div className="mobileNav">
                <p onClick={() => setShow(false)}>Close</p>
            </div>
            <p className="help">(press close once you've selected the topic)</p>
            <h1>History</h1>
            <div className="links">
                <NavLink to={"/history/britain"}>🇬🇧 Britain</NavLink>
                <NavLink to={"/history/crusades"}>⚔️ Crusades</NavLink>
                <NavLink to={"/history/russia"}>🇷🇺 Russia</NavLink>
                <NavLink to={"/history/exam"}>📘 Exams</NavLink>
            </div>

            <h1>Computer Science</h1>
            <div className="links">
                <NavLink to={"/cs/paper1"}>🖥️ Paper One</NavLink>
                <NavLink to={"/cs/paper2"}>🧑‍💻 Paper Two</NavLink>
            </div>

            <h1>Maths</h1>
            <div className="links">
                <NavLink to={"/maths/pure"}>🧮 Pure</NavLink>
                <NavLink to={"/maths/stats"}>📊 Statistics</NavLink>
                <NavLink to={"/maths/mechanics"}>🦾 Mechanics</NavLink>
            </div>
        </div>
    )
}

export default function Nav() {
    let nav

    const [show, setShow] = useState(false)
    

    if (mobile) {
        nav = (
            <>
                <nav>
                    <div className="nav">
                        <Link to="/">Nexus</Link>
                        <p onClick={() => setShow(true)} >Menu</p>
                    </div>
                </nav>
                { show ? <MobileNav setShow={setShow} /> : null}
            </>
        )
    } else {
        nav = (
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

                <h1>Maths</h1>
                <NavLink to={"/maths/pure"}>🧮 Pure</NavLink>
                <NavLink to={"/maths/stats"}>📊 Statistics</NavLink>
                <NavLink to={"/maths/mechanics"}>🦾 Mechanics</NavLink>
            </nav>
        )
    }

    return nav
}