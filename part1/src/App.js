import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const HandleGood = () => {
    setGood(good + 1)
  }

  const HandleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const HandleBad = () => {
    setBad(bad + 1)
  }

  const ConditionalRender = (props) => {
    const {goodText, goodStat, neutralText, neutralStat, 
      allText, allStat, positiveText, positiveStat, badText, badStat} = props;
    if (good === 0 && neutral === 0 && bad === 0) {
      return (
        <p>No feedback given</p>
      )
    } else {
      return (
        <div>
          <p>{goodText} {goodStat}</p>
          <p>{neutralText} {neutralStat}</p>
          <p>{badText} {badStat}</p>
          <p>{allText} {allStat}</p>
          <p>{positiveText} {positiveStat} %</p>
        </div>
      )
    }
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
      <Btns text = {text} text2 = {text2} text3 = {text3}></Btns>
      <h1>Statistics</h1>
      <ConditionalRender goodText = {text} goodStat = {good}
        neutralText = {text2} neutralStat = {neutral}
        badText = {text3} badStat = {bad}
        allText = "all" allStat = {good + neutral + bad}
        positiveText = "positive" positiveStat ={good/(good+neutral+bad)*100} ></ConditionalRender>
    </div>
  )
}

export default App