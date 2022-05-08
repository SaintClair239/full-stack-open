import { useState } from 'react'

const Statistic = ({text, value}) => {
  
  return (
    <p>{text} {value}</p>
  )
}

const Statistics = ({clicks}) => {
  const total = clicks.good + clicks.bad + clicks.neutral;
  const positive = clicks.good/(clicks.good+clicks.neutral+clicks.bad)*100

  if (total === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <div>
     <Statistic text = "good" value = {clicks.good}/>
     <Statistic text = "neutral" value = {clicks.neutral}/>
     <Statistic text = "bad" value = {clicks.bad}/>
     <Statistic text = "all" value = {total}/>
     <Statistic text = "positive" value = {positive + '%'}/>
    </div>
  )
  
}

const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({good: 0, neutral: 0, bad: 0})
  
  const HandleGood = () => {
    setClicks({...clicks, good: clicks.good + 1})
  }

  const HandleNeutral = () => {
    setClicks({...clicks, neutral: clicks.neutral + 1})
  }

  const HandleBad = () => {
    setClicks({...clicks, bad: clicks.bad + 1})
  }

  

  const text = "good"
  const text2 = "neutral"
  const text3 = "bad"

  const Btns = ({text, text2, text3}) => {
    return (
      <div>
        <button onClick = {HandleGood}>{text}</button> 
        <button onClick = {HandleNeutral}>{text2}</button> 
        <button onClick = {HandleBad}>{text3}</button>
      </div>
    )
  }
   
  return (
    <div>
      <h1>give feedback</h1>
      <Btns text = {text} 
        text2 = {text2} 
        text3 = {text3}></Btns>
      <h1>Statistics</h1>
    <Statistics clicks = {clicks}/>
    </div>
  )
}

export default App