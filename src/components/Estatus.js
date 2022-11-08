import React from 'react'


export default function Estatus({likes}) {
  
  return (
    <header>
        <h1>Estatus de Posteos</h1>
        <p>Likes totales: <span>{likes}</span></p>
    </header>
  )
}
