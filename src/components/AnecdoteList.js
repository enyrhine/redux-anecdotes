import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer';

const ListAnecdote = (props) => {

    const vote = (id) => {
        console.log('vote', id)
        props.voteAnecdote(id)
        const anecdote = props.anecdotesMapped.find(anecdote => anecdote.id === id)
        props.createNotification(`Votettu: ${anecdote.content}`)

        setTimeout(() => {
            props.createNotification('')
        }, 5000)
    }
    return (
        <div>
            {props.anecdotesMapped.map(anecdote =>
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

const anecdotesToShow = ({ anecdotes, filter }) => {
    console.log('mitä listalla on: ', anecdotes)
    return (anecdotes
        .filter(a => a.content.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
        .sort((x, y) => y.votes - x.votes)
    )}

const mapStateToProps = (state) => {
    return {
        anecdotesMapped: anecdotesToShow(state),
        //anecdotes: state.anecdotes,
        //filter: state.filter
    }
}

const mapDispatchToProps = {
    voteAnecdote,
    createNotification
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListAnecdote)