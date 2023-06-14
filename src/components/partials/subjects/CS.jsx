import React from "react"
import BigLink from "../components/BigLink"

export default function CS({ subject }) {
    let view

    if (subject == "paper1") {
        view = (
            <>
                <h1>CS Paper One</h1>
                <div id="maintext">
                    <h2 id="1">Components of a Computer</h2>
                    <br />
                    <h3 id="cpu">Structure & Function of the CPU</h3>
                    <br />
                    <div className="dual">
                        <BigLink title={"CPU Components"} location={"1-cpu-components"} />
                        <BigLink title={"Fetch-Decode-Execute Cycle"} location={"1-fetch-decode-execute"} />
                    </div>
                    <br />
                    <h2 id="2">Software & Software Development</h2>
                    <br />
                    <div className="dual">
                        <BigLink title={"Software Development Methodologies"} location={"2-software-development-methodologies"} />
                    </div>
                </div>
            </>
        )
    }

    return view
}