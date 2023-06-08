import React from "react"
import { useParams } from "react-router-dom"
import History from "./partials/subjects/History"
import CS from "./partials/subjects/CS"

export default function Subject() {
    const params = useParams()
    let subject

    if (params.subject == "history") {
        subject = <History subject={params.section} />
    } else if (params.subject == "cs") {
        subject = <CS subject={params.section} />
    }

    return subject
}