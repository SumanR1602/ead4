import React from 'react'

export default function Child({message,onMessage}) {
    const handleChange=(event)=>{
        onMessage(event.target.value);
    }
  return (
    <div>
      <h3>Child Component</h3> 
      <input type="text" value={message} onChange={handleChange} />
    </div>
  )
}
