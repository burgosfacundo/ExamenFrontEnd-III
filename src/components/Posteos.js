import React from 'react'
import data from './data.json'
import Post from './Post'


export default function Posteos({aumentarLikes}) {
  return (
    <div className='container'>
      {data.map(post => <Post key={post.id} post={post} aumentarLikes={aumentarLikes}/>)}
    </div>
  )
}
