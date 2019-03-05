import React from 'react';
import Filter from './components/Filter'
import Notification from './components/Notification'
import NewAnecdote from './components/AnecdoteForm'
import ListAnecdote from './components/AnecdoteList';

const App = (props) => {
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

export default App
