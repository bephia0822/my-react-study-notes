//原來這就是event？現在螢幕上有一張圖片，圖下有一個按鈕寫Click me, 按下Click me後會出現文字I was clicked!

import React from "react"

function App() {
    return (
        <div>
            <img src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={function() {console.log("I was clicked!")}}>Click me</button>    //這邊改成ES6的程式也可以<button onClick={() => console.log("I was clicked!")}>Click me</button>
        </div>
    )
}

export default App

//或者這樣也可以，整個提出寫在上面
import React from "react"

function handleClick() {
    console.log("I was clicked")
}

function App() {
    return (
        <div>
            <img src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App



//然後他新加了這個功能超酷，只要滑鼠一移到圖片上，就會console.log出“鼠標移到我身上了！“（Hovered!)
import React from "react"

function handleClick() {
    console.log("I was clicked")
}

// https://reactjs.org/docs/events.html#supported-events

function App() {
    return (
        <div>
            <img onMouseOver={() => console.log("Hovered!")} src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default App
