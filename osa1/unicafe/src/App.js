import { useState } from 'react'

const Display = props => <div><h1>{props.value}</h1></div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
    <tr>
      <td>{props.text}</td><td>{props.value}</td>
    </tr>

  
  
)

const Statistics = (props) => {
  // ...
  var summa = props.good+props.neutral+props.bad
  var ka = (props.good-props.bad)/summa
  var pros = (props.good)/(props.good+props.neutral+props.bad)*100
  if (summa == 0) {
    return (
      <div>
        <Display value={props.text} />
        <p>No feedback given</p> 
      </div> 
    )
  }
  else 
  {
  return (
    <div>
    <Display value={props.text} />
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="average" value={ka} />
        <StatisticLine text="positive" value={pros + ' %'} />
      </tbody>
    </table>
    </div>
  )
  }
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const text1 = 'give feedback'
  const text2 = 'statistics'
  return (
    <div>
    <Display value={text1} />
    <Button handleClick={() => setGood(good + 1)} text="good" />
    <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
    <Button handleClick={() => setBad(bad + 1)} text="bad" />
    <Statistics text={text2} good={good} neutral={neutral} bad={bad} />
  </div>
  )
}


export default App