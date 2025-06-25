import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const [array, setArray] = useState([0,0,0,0,0,0,0,0])

  const handleClick = () => {
    const arrayCopy = [...array]
    arrayCopy[selected] += 1
    setArray(arrayCopy)
  }

  let largest = array[0]
  let i = 0
  let index = 0
  

  for (i = 0; i < array.length; i++){
    if (array[i] > largest) {
      largest = array[i]
      index = i
    }
  }

  return (

    <>
    <h1>Anecdote of the day</h1>
    <div>
      {anecdotes[selected]}
    </div>
    <div>has {array[selected]} votes</div>

    <button onClick = {handleClick}>vote</button>

    <button onClick = {() => {
      setSelected(Math.floor(Math.random() * 8)) 
    }}>next anecdote</button>

    <h1>Anecdote with most votes</h1>
    <div>{anecdotes[index]}</div>
    <div>has {largest} votes</div>
    
    </>
  )
}

export default App
