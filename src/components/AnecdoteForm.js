import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer';

const NewAnecdote = (props) => {

    const addAnecdote = (event) => {
        event.preventDefault()
        props.createAnecdote(event.target.anecdote.value)
        props.createNotification(`Lisätty uusi anekdootti: ${event.target.anecdote.value}`)

        setTimeout(() => {
            props.createNotification('')
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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes
    }
}

const mapDispatchToProps = {
    createAnecdote,
    createNotification
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewAnecdote)
