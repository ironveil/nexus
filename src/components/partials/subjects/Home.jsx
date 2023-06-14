import React from "react"
import SubjectLink from "../components/SubjectLink"

export default function Home() {
    return (
        <>
            <h1>History</h1>
            <SubjectLink title={"Britain"} subtitle={"1930 - 1997"} location={"history/britain"} img={"britain.jpg"} />
            <SubjectLink title={"Crusades"} subtitle={"First - Third"} location={"history/crusades"} img={"crusades.jpg"} />
            <SubjectLink title={"Russia"} subtitle={"1864 - 1964"} location={"history/russia"} img={"russia.jpg"} />

            <h1>Computer Science</h1>
            <SubjectLink title={"Computer Science"} subtitle={"Paper One"} location={"cs/paper1"} img={"cs1.jpg"} />
            <SubjectLink title={"Computer Science"} subtitle={"Paper Two"} location={"cs/paper2"} img={"cs2.jpg"} />

            <h1>Maths</h1>
            <SubjectLink title={"Pure Maths"} subtitle={"Years 1 & 2"} location={"maths/pure"} img={"pure.jpg"} />
            <SubjectLink title={"Statistics"} subtitle={"Years 1 & 2"} location={"maths/stats"} img={"stats.png"} />
            <SubjectLink title={"Mechanics"} subtitle={"Years 1 & 2"} location={"maths/mechanics"} img={"mechanics.jpg"} />

            <br />
        </>
    )
}