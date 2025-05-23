import { useState } from 'react'

const Button = (props) => {
return (
<>
<button onClick = {props.onClick}>{props.text}</button>
</>
)
}

const StatisticsLine = (props) => {
return (
<>
<p> {props.text} {props.value} {props.sign}</p>
</>
)
}

const Statistics = (props) => {

  if (props.good + props.neutral + props.bad === 0){

    return (
      <>
    <h1>statistics</h1>
    <p>No feedback given</p>
    </>
    )
  }

  else {

  return (

    <>

      <h1>statistics</h1>
      <table>

        <tbody>
          <tr>
          <td><StatisticsLine text = "good" /> </td>
          <td><StatisticsLine value = {props.good} /></td>
          </tr>

          <tr>
          <td><StatisticsLine text = "neutral" /></td>
          <td><StatisticsLine value = {props.neutral} /></td>
          </tr>

          <tr>
          <td><StatisticsLine text = "bad" /></td>
          <td><StatisticsLine value = {props.bad} /></td>
          </tr>

          <tr>
          <td><StatisticsLine text = "all" /></td>
          <td><StatisticsLine value = {props.good + props.neutral + props.bad} /></td>
          </tr>

          <tr>
          <td><StatisticsLine text = "average" /></td>
          <td><StatisticsLine value = {((props.good * 1) + (props.neutral * 0) - (props.bad * 1))/ (props.good + props.neutral + props.bad)} /></td>
          </tr>


          <tr>
          <td><StatisticsLine text = "positive" /></td>
          <td><StatisticsLine value = {(props.good/ (props.good + props.neutral + props.bad)) * 100} sign = "%" /></td>
        </tr>
        
        </tbody>
      
    
      </table>


    </>

  )

}

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick = {() => setGood(good + 1)} text = "good" />
      <Button onClick = {() => setNeutral(neutral + 1)} text = "neutral" />
      <Button onClick = {() => setBad(bad + 1)} text = "bad" />
      <Statistics good = {good} bad = {bad} neutral = {neutral}/>

    </div>
  )
}

export default App
