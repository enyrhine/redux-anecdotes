import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { createNotification } from '../reducers/notificationReducer';

const ListAnecdote = (props) => {
    const anecdotesMapped =
        props.anecdotes
            .filter(a => a.content.toLocaleLowerCase().includes(props.filter.toLocaleLowerCase()))
            .sort((x, y) => y.votes - x.votes)

    /*case 'ALL':
      const anecdoteToShow = state.map(a => a.id === id ? a.content : '')
      return anecdoteToShow
*/
    const vote = (id) => {
        console.log('vote', id)
        props.voteAnecdote(id)
        const anecdote = anecdotesMapped.find(anecdote => anecdote.id === id)
        props.createNotification(`Votettu: ${anecdote.content}`)

        setTimeout(() => {
            props.createNotification('')
        }, 5000)
    }
    return (
        <div>
            {anecdotesMapped.map(anecdote =>
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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        filter: state.filter
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