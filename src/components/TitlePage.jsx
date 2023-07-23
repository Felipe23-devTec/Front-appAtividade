import React from 'react'

export default function TitlePage({title, children}) {
  return (
    <div className='d-flex justify-content-between align-items-end border-bottom border-2 mb-3 mt-3 pb-3'>
        <h1>{title}</h1>
        {children}
      </div>
  )
}
