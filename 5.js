import React from "react"
import ReactDOM from "react-dom"

function App() {
  const firstName = "Bob"
  const lastName = "Ziroll"
  
  return (
    <h1>Hello {firstName + " " + lastName}!</h1>    //這邊就是所謂的JSX(javascript裡面的html?)加{}就能讓JSX變成javascript  換成這樣也可以<h1>Hello {`${firstName} ${lastName}`}!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))

//這裡示範了else if,什麼時間就用什麼問候語
import React from "react"
import ReactDOM from "react-dom"

function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  
  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }
  
  return (
    <h1>Good {timeOfDay}!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))