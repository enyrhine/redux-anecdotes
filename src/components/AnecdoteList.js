import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer';

const ListAnecdote = (props) => {
    //const anecdotes = props.store.getState().anecdotes
    //const filter = props.store.getState().filter
    const anecdotes = 
            props.store.getState().anecdotes
            .filter(a => a.content.toLocaleLowerCase().includes(props.store.getState().filter.toLocaleLowerCase()))
            .sort((x,y) => y.votes - x.votes)
        
    /*case 'ALL':
      const anecdoteToShow = state.map(a => a.id === id ? a.content : '')
      return anecdoteToShow
*/
    const vote = (id) => {
        console.log('vote', id)
        props.store.dispatch(voteAnecdote(id))
        const anecdote = anecdotes.find(anecdote => anecdote.id === id)
        props.store.dispatch(createNotification(`Votettu: ${anecdote.content}`))

        setTimeout(() => {
            props.store.dispatch(createNotification(''))
        }, 5000)
    }
    return (
        <div>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}
export default ListAnecdote