import React from "react"
import { Link } from "react-router-dom"

export default function SubjectLink({ title, subtitle, location, img }) {
    return (
        <div className="subjectlink">
            <Link to={location}>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <div className="img">
                    <img src={"./subjectlink/" + img} />
                    <div className="overlay"></div>
                </div>
            </Link>
        </div>
    )
}