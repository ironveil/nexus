import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Wrapper from './Wrapper'
import Subject from './components/Subject'
import Home from './components/partials/subjects/Home'
import "./index.css"
import Notes from './components/partials/subjects/Notes'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Wrapper />,

        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: ":subject/:section",

                children: [
                    {
                        index: true,
                        element: <Subject />
                    },
                    {
                        path: ":note",
                        element: <Notes />
                    }
                ]
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
	    <RouterProvider router={router} />
    </React.StrictMode>,
)