import { useState } from 'react'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

// const changeAnec = (p) => setSelected(Math.round(p*Math.random()))

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  
  const [points, setPoints] = useState([0,0,0,0,0,0,0])
  const [maksimi, setMax] = useState(0)
  const [selected, setSelected] = useState(0)

  const vote = () => {
    const copy = [...points]
    let maks = maksimi
    copy[selected] += 1
    setPoints(copy)
    for (let i = 0; i < copy.length; i++) {
      if (copy[i] > maks) {
        maks = copy[i]
      }
      
    }
    setMax(maks)
  }
  
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      has {points[selected]} votes
      <br />
      <Button text='vote' handleClick={vote} />
      <Button text='next anecdote' handleClick={() => setSelected(Math.round((anecdotes.length-1)*Math.random()))} />
      <h1>Anectode with most votes</h1>
      {anecdotes[points.indexOf(maksimi)]}
      <br />
      has {maksimi} votes
    </div>
  )
}




export default App