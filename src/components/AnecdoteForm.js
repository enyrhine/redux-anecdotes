import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer';
//import anecdoteService from '../services/anecdotes'

const NewAnecdote = (props) => {

    const addAnecdote = async (event) => {
        event.preventDefault()
        const element = event.target
        const content = element.anecdote.value

        /*event.preventDefault()
        const element = event.target
        //console.log('mitä event pitää sisällään: ', event)
        const content = element.anecdote.value
        await anecdoteService.createNew(content)
        .then(props.createAnecdote(content))
*/
        element.anecdote.value = ''
        props.createAnecdote(content)
/* const newAnecdote = await anecdoteService.createNew(content)
        .then(props.createAnecdote(newAnecdote.content))*/

        props.createNotification(`Lisätty uusi anekdootti`)

        setTimeout(() => {
            props.createNotification('')
        }, 5000)
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
