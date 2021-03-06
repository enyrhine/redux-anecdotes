/*const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]*/
import anecdoteService from '../services/anecdotes'
//import anecdotes from '../services/anecdotes';

//const getId = () => (100000 * Math.random()).toFixed(0)

/*const asObject = (anecdote) => {
  return {
    content: anecdote,
    votes: 0,
    id: getId()
  }
}*/

/*export const createAnecdote = (data) => {
  return {
    type: 'NEW_ANE',
    data,
  }
}*/
export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANE',
      data: newAnecdote,
    })
  }
}

/*export const voteAnecdote = (id) => {
  return {
    type: 'vote',
    data: { id }
  }
}*/
export const voteAnecdote = (data) => {
  return async dispatch => {
    //console.log('Miten saan kaikki anekdootit tänne?', data)
    const voted = await anecdoteService.voteNew(data)

    dispatch({
      type: 'vote',
      data: voted
    })
  }
}


/*export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}*/
export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

//const initialState = anecdotesAtStart.map(asObject)

const AnecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  //console.log('action data', action.type)
  switch (action.type) {
    case 'vote':
    console.log('Mitä tänne tulee: ', action.data)
      const id = action.data.id
      const anecdoteToChange = state.find(a => a.id === id)
      const changeAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      console.log('Pääseekö tänne asti? votes: ', changeAnecdote.votes)
      return state.map(anec => anec.id !== id ? anec : changeAnecdote).sort((x, y) => y.votes - x.votes)
    case 'NEW_ANE':
    return state.concat(action.data)
      //return state.concat(asObject(action.data.content))
      //return action.data
      //.sort((x, y) => y.votes - x.votes)
    case 'INIT_ANECDOTES':
      return action.data  
    default:
      return state
  }
}

export default AnecdoteReducer