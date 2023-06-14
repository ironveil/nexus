import React from "react"
import { Link } from "react-router-dom"
import TimelineLink from "../components/TimelineLink"
import BigLink from "../components/BigLink"

export default function History({ subject }) {
    let view

    if (subject == "britain") {
        view = (
            <>
                <h1>Britain 1930 - 1997</h1>
                <div id="maintext">
                    <TimelineLink title="Post-War Labour" location="labour-45-51" date="1945 - 1951" />
                    <TimelineLink title="1951 Election" location="election-51" date="1951" />
                    <TimelineLink title="Conservative Domination" location="conservatives-51-64" date="1951 - 1964" />
                    <TimelineLink title="1964 Election" location="election-64" date="1964" />
                    <TimelineLink title="Wilson's Limited Success" location="wilson-64-70" date="1964 - 1970" />
                    <TimelineLink title="1970 Election" location="election-70" date="1970" />
                    <TimelineLink title="Heath's Failure" location="heath-70-74" date="1970 - 1974" />
                    <TimelineLink title="1974 Elections" location="election-74" date="1974" />
                    <TimelineLink title="Wilson & Callaghan" location="labour-74-79" date="1974 - 1979" />
                </div>
            </>
        )
    } else if (subject == "crusades") {
        view = (
            <>
                <h1>The Crusades</h1>
                <div id="maintext">
                    <TimelineLink title="Medieval Life" location="medieval-life" date="1000's" />
                    <TimelineLink title="The First Crusade" location="first" date="1095 - 1099" />
                    <TimelineLink title="Establishment of Outremer" location="outremer-establishment" date="1098 - 1144" />
                    <TimelineLink title="The Second Crusade" location="second" date="1144 - 1148" />
                    <TimelineLink title="Rise of Islam" location="outremer-islam" date="1148 - 1188" />
                    <TimelineLink title="Fall of Jerusalem" location="jerusalem-1188" date="1188" />
                    <TimelineLink title="The Third Crusade" location="third" />
                    <TimelineLink title="Aftermath" location="third-aftermath" />
                </div>
            </>
        )
    } else if (subject == "russia") {
        view = (
            <>
                <h1>Russia 1864 - 1964</h1>
            </>
        )
    } else if (subject == "exam") {
        view = (
            <>
                <h1>Exam Resources</h1>
                <div id="maintext">
                    <h2 id="questions">Exam Questions</h2>
                    <br />
                    <BigLink title={"Assess the reasons for..."} location={"./assess-the-reasons-for"} />
                    <br />
                    <BigLink title={"How far or To what extent, with a stated factor"} location={"./how-far-to-what-extent"} />
                    <br />
                    <BigLink title={"Crusades 10 Marker"} location={"./crusades-10-marker"} />
                    <h2 id="examples">Examples</h2>
                    <br />
                    <h3 id="crusades">Crusades</h3>
                    <br />
                    <h4 id="10-marker">10 Markers</h4>
                    <br />
                    <BigLink title={"Which of the following was of greater importance in bringing about the First Crusade?"} location={"crusades-first-build-up"} />
                    <br />
                    <BigLink title={"Which of the following was of greater importance to the success of the First Crusade?"} location={"crusades-first-success"} />
                    <br />
                    <BigLink title={"Which of the following was of greater importance in Arab advances leading to the Third Crusade?"} location={"crusades-third-arab-advances"} />
                    <br />
                    <BigLink title={"Which of the following was of greater importance in bringing about the Third Crusade?"} location={"crusades-third-build-up"} />
                    <br />
                    <BigLink title={"Which of the following was of greater importance to the outcome of the Third Crusade?"} location={"crusades-third-outcome"} />
                </div>
            </>
        )
    }

    return view
}