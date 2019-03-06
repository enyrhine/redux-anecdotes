import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Filter from './components/Filter'
import Notification from './components/Notification'
import NewAnecdote from './components/AnecdoteForm'
import ListAnecdote from './components/AnecdoteList';
import anecdoteService from './services/anecdotes'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = (props) => {
  useEffect(() => {
    anecdoteService
      .getAll().then(anecdotes => props.initializeAnecdotes(anecdotes))
  }, [])


  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <ListAnecdote />
      <NewAnecdote />
    </div>
  )
}

export default connect(null, { initializeAnecdotes })(App)
