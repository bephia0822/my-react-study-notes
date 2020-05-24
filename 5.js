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

//這邊要講的是如何放style
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
    <h1 style={{color: "#FF8C00", backgroundColor: "#FF2D00"}}>Good {timeOfDay}!</h1>   //只要多加個{}就行，另外也不能寫background-color，"-"不存在於javascript
  )
}

ReactDOM.render(<App />, document.getElementById("root"))



//另外上面那樣寫會讓code看起來太長，以下看起來較簡潔
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
  
  const styles = {                             //把全部放進一個variable
    color: "#FF8C00", 
    backgroundColor: "#FF2D00",
    fontSize: 24
  }
  
  return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))


//還可以設定每個回答顏色都不一樣，但const styles移上來的話它的大小就會全被限制住
import React from "react"
import ReactDOM from "react-dom"

function App() {
  const date = new Date(2018, 6, 31, 15)    //任意設定日期時間
  const hours = date.getHours()
  let timeOfDay
  const styles = {
    fontSize: 30
  }
  
  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "#04756F"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "#8914A3"
  } else {
    timeOfDay = "night"
    styles.color = "#D90000"
  }
  
  return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))