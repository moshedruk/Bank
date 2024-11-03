import React, { useState } from 'react'
export default function Count() {
    const [count,setCount] = useState(0)
  console.log(count)
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </div>
  )
}
