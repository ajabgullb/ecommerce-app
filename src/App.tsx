import { useState } from 'react'
import { Button } from './components/ui/button'

export default function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount((count) => count + 1)
  }

  return (
    <>
      <div className='m-5'>
        <Button className='cursor-pointer' onClick={addValue}>{count}</Button>
      </div>
    </>
  )
}

