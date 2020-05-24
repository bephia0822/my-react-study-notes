import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"))
//這樣旁邊的browser就會出現Hello World!在螢幕上

//開另一個檔案Footer.js  (這邊可以大寫因為是react)
import React from "react"

function Footer() {
    return (
        <footer>
            <h3>This is my footer element</h3>
        </footer>
    )
}

export default Footer


//這邊是另一個叫App.js的檔案
import React from "react"
import Footer from "./Footer"   //記得這邊要寫檔案從哪來的

function App() {
    return (
        <div>
            <nav>
                <h1>Hello a third time!</h1>
                <ul>
                    <li>Thing 1</li>
                    <li>Thing 2</li>
                    <li>Thing 3</li>
                </ul>
            </nav>
            <main>
                <p>This is where most of my content will go...</p>
            </main>
            <Footer />          //加這個在Footer打的東西就會出現
        </div>
    )
}

export default App