import React from "react"
import { Link } from "react-router-dom"

export default function TimelineLink({ title, location, date }) {
    return (
        <div className="timelineLink">
            <Link to={location}>
                <div className="date">
                    <p>{date}</p>
                </div>
                <div className="timeline">
                    <div className="line" />
                    <div className="circle" />
                </div>
                <div className="title">
                    <h1>{title}</h1>
                </div>
            </Link>
        </div>
    )
}