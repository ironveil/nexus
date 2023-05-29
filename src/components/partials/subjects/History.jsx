import React from "react"
import { Link } from "react-router-dom"
import TimelineLink from "../components/TimelineLink"

export default function History({ subject }) {
    let view

    if (subject == "britain") {
        view = (
            <>
                <h1>Britain 1930-97</h1>
                <div id="maintext">
                    <TimelineLink title="Post-War Labour" location="labour-45-51" date="1945 - 1951" />
                    <TimelineLink title="1951 Election" location="election-51" date="1951" />
                    <TimelineLink title="Conservative Domination" location="conservatives-51-64" date="1951 - 1964" />
                    <TimelineLink title="1964 Election" location="election-64" date="1964" />
                    <TimelineLink title="Wilson's Reforms" location="wilson-64-70" date="1964 - 1970" />
                    <TimelineLink title="1970 Election" location="election-70" date="1970" />
                    <TimelineLink title="1974 Election" location="election-74" date="1974" />
                </div>
            </>
        )
    } else if (subject == "crusades") {
        view = (
            <>
                <h1>The Crusades</h1>
                <div id="maintext">
                    <TimelineLink title="Fall of Edessa" location="edessa-1144" date="1144" />
                    <TimelineLink title="Fall of Jerusalem" location="jerusalem-1188" date="1188" />
                </div>
            </>
        )
    }

    return view
}