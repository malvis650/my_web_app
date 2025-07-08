import React from 'react'
import { useState } from 'react'

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [actor, setActor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, actor}

        fetch('http://localhost:8000/movies', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog).then(() => {
                console.log('new movie added')
            })
    })}
  return (
    <div className='create'>
        <h1>Add a New Movie</h1>
        <form onSubmit={handleSubmit}>
            <label>Movie Title:</label>
            <input 
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />

            <label>Movie Body:</label>  
            <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            ></textarea>

            <label>Movie Actor:</label>  
            <select
            value={actor}
            onChange={(e) => setActor(e.target.value)}
            >
                <option value="Arnold">Arnold</option>
                <option value="Chuck">Chuck</option>
                <option value="Predator">Predator</option>
            </select>
            <button>Add Movie</button>

        </form>
    </div>
  )
}

export default Create
