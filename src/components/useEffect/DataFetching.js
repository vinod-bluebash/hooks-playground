import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
  const [post, setPost] = useState([])
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  useEffect(() => {
    // axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        setPost(res.data)
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }, [idFromButtonClick])

  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button onClick={() => setIdFromButtonClick(id)}>Get Post</button>
      <ul>
        {
          post.map(post => <li key={post.id}>{post.title}</li>)
        }
        <div>{post.title}</div>
        <div>{post.data}</div>
      </ul>
    </div>
  )
}

export default DataFetching
