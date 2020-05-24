//每一個input type="checkbox"在網頁上都是check list的小框框

import React from "react"

function App() {
    return (
        <div>
            <input type="checkbox" />
            <p>Placeholder text here</p>
            
            <input type="checkbox" />
            <p>Placeholder text here</p>
            
            <input type="checkbox" />
            <p>Placeholder text here</p>
            
            <input type="checkbox" />
            <p>Placeholder text here</p>
        </div>
    )
}

export default App

//這邊他要提醒的是要連到CSS時是className不是Class
import React from "react"

function Header() {
    return (
        <header className="navbar">This is the header</header>
    )
}

export default Header


body {
    margin: 0;
}

//style.css裡面
.navbar {
    height: 100px;
    background-color: #333;
    color: whitesmoke;
    margin-bottom: 15px;
    text-align: center;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}