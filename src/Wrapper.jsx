import React from "react"
import { Outlet } from "react-router-dom"
import Nav from "./components/partials/components/Nav"

export default function Wrapper() {
    return (
        <div id="main">
            <Nav />
            <div id="content">
                <Outlet />
            </div>
        </div>
    )
}