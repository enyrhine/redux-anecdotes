import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
//import { createAnecdote } from './reducers/anecdoteReducer'
//import { notificationChange } from './reducers/notificationReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer
})

const store = createStore(reducer)
//console.log(store.getState())


const render = () => {
  ReactDOM.render(
    //<div></div>,
    <App store={store} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)