import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes/'
//const url = 'http://localhost:3001/'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    console.log('miten saadaan anecdootti: ', response.data)
    return response.data
}

const createNew = async content => {
    const object = { content, votes: 0 }
    const response = await axios.post(baseUrl, object)
    return response.data
}

const voteNew = async anekdootti => {
    console.log('Epäilen kaikkea!', anekdootti)
   //const theObject = getAll.find(a => a.id === id)
    
    const object = {...anekdootti, votes: + 1}
    console.log('yritetään votettaa: ', object)
    const response = await axios.put(baseUrl+anekdootti.id, object)
    console.log('Mitä yritetään palauttaa servicessä: ', response.data)
    return response.data
}

export default {
    getAll,
    createNew,
    voteNew
}