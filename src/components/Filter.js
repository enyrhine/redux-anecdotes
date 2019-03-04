import React from 'react'
import { createFilter } from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
      event.preventDefault()
      props.store.dispatch(createFilter(event.target.value))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter