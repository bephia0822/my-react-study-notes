//在App.js本來是長這樣，他要教我們怎麼用state，本來螢幕上只有Is state important to know? 
import React from "react"

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Is state important to know?</h1>
            </div>
        )
    }
}

export default App


//加上state後，螢幕上出現Is state important to know? Yes
import React from "react"

// https://scrimba.com/p/p4Mrt9/cQnMDHD  如果不知道什麼是class的學習連結

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }
    
    render() {
        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
            </div>
        )
    }
}

export default App