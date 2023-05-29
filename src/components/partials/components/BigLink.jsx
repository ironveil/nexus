import React from "react"
import { Link } from "react-router-dom"

export default function BigLink({ title, location }) {
    return (
        <div className="bigLink">
            <Link to={location}>
                <h1>{title}</h1>
            </Link>
        </div>
    )
}