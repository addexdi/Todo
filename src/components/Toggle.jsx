import { useState } from 'react'

export default function ToggleButton() {
  const [toggleState, setToggleState] = useState(false)

  const handleClick = () => {
    setToggleState(!toggleState)
  }

  return (
    <button onClick={handleClick}>
      {toggleState ? 'Completed' : 'Not Completed'}
    </button>
  )
}
