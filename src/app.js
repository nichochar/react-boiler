import React from 'react'
import ReactDOM from 'react-dom'

import 'font-awesome/css/font-awesome.css'
import './app.css'

import {browserHistory} from 'react-router'
import makeRoutes from './routes'

import App from 'containers/App/App'

const mountNode = document.querySelector('#root');

const routes = makeRoutes()

ReactDOM.render(
  <App history={browserHistory}
       routes={routes}/>, mountNode);
