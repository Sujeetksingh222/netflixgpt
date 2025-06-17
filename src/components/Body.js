import React from 'react'

import Browse from './Browse';
import Login from './Login';
import { createBrowserRouter } from 'react-router-dom';
import {RouterProvider} from 'react-router-dom';
const Body = () => {
    // createBrowserRouter is used to create a router that can be used to navigate between different routes in the application.
    // It takes an array of route objects, where each object defines a path and the component to render for that path.

    const appRouter= createBrowserRouter([
        {
            path:"/",
            element:<Login/>,
        },
        {
            path:"/browse",
            element:<Browse/>,
        },


    ]
    )
  return (
    <div>
        {/* The RouterProvider component is used to provide the router to the application. It takes a router object as a prop. */}
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body