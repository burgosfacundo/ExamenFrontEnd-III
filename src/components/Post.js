import React, { useState } from 'react'


export default function Post({key,post,aumentarLikes}) {

  const [cantLikes,setCantLikes] = useState(post.likes)

const darLike = () =>{
  setCantLikes(cantLikes+ 1)
  aumentarLikes()
}

  return (
    <div className='posteo' key ={key}>
      <h3>{post.titulo}</h3>
      <p>{post.texto}</p>
      <button onClick={darLike}>👍</button>
      {cantLikes > 10 ? <h5>Más de 10 likes</h5> : <h5>{cantLikes}</h5>}
    </div>
  )
}
