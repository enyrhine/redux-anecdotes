import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes/'
//const url = 'http://localhost:3001/'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async content => {
    const object = { content, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const voteNew = async anekdootti => {
    const object = {...anekdootti, votes: anekdootti.votes + 1}
    const response = await axios.put(baseUrl+anekdootti.id, object)
    return response.data
}

export default {
    getAll,
    createNew,
    voteNew
}