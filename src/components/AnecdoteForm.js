import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer';

const NewAnecdote = (props) => {

    const addAnecdote = (event) => {
        event.preventDefault()
        props.store.dispatch(createAnecdote(event.target.anecdote.value))
        props.store.dispatch(createNotification(`Lisätty uusi anekdootti: ${event.target.anecdote.value}`))

        setTimeout(() => {
            props.store.dispatch(createNotification(''))
        }, 5000)
        event.target.anecdote.value = ''
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name="anecdote" /></div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}
export default NewAnecdote