
// Exercises 1.6.-1.11.
import { useState } from "react";

const Statistick = ({allVoices, good, bad, neutral }) => {
  let stat = good*100/allVoices
  if (allVoices === 0){ 
    return <div>
      <p> No feedback given</p>
    </div>
    
  }else {
    return  <table>
        {/* <tr>
          <StatisticLine text="Good: "/>  нахрена я єто писал?)
          <StatisticLine value ={good} />
        </tr>
        <tr>
          <StatisticLine text="Neutral:"/>
          <StatisticLine value ={neutral} />
        </tr>
        <tr>
          <StatisticLine text="Bad:"/>
          <StatisticLine value ={bad} />
        </tr>
        <tr>
          <StatisticLine text="All voices:"/>
          <StatisticLine value ={allVoices} />
        </tr>
        <tr>
          <StatisticLine text="Average:"/>
          <StatisticLine value ={(good - bad)/allVoices} />
        </tr> 
        <tr>
          <StatisticLine text="Statistick:"/>
          <StatisticLine value ={stat + ' %'} />
        </tr> */}
       
      <StatisticLine text="Good:" value ={good} />
      <StatisticLine text="Neutral:" value ={neutral} />
      <StatisticLine text="Bad:" value ={bad} /> 
      <StatisticLine text="All voices:" value ={allVoices} /> 
      <StatisticLine text="Average:" value ={(good - bad)/allVoices} /> 
      <StatisticLine text="Statistick:" value ={stat + ' %'} />  
    </table>
  }}

  const StatisticLine = (props) => {
    return <tr>
        <td>{props.text}</td> 
        <td>{props.value}</td>
    </tr>
  }

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allVoices, setAllVoices] = useState(0)
  // const [average, setAver] = useState(0) 

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => {setGood(good + 1); setAllVoices(allVoices + 1)}}>good</button>
      <button onClick={() => {setNeutral(neutral + 1); setAllVoices(allVoices + 1)}}>neutral</button>
      <button onClick={() => {setBad(bad + 1); setAllVoices(allVoices + 1)}}>bad</button>
      <h1>Statistick</h1>
      <Statistick good = {good} allVoices = {allVoices} neutral={neutral} bad={bad} />
    </div>
  )
}
 
export default App;

