import React from 'react'
import {browserHistory, Router, Route, Redirect} from 'react-router'
import makeMainRoutes from './views/Main/routes'

// Let components define their own routes by importing like so
export const makeRoutes = () => {
  const main = makeMainRoutes();

  return (
    <Route path=''>
      {main}
    </Route>
  )
}

export default makeRoutes
