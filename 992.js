//出現Loading...然後過一秒半出現下一個文字
//在App.js裡

import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 1500)       //我真不知道為何1500是一秒半。。
    }
    
    render() {
        return (
            <div>
                {this.state.isLoading ?
                <h1>Loading...</h1> :
                <Conditional />}
            </div>
        )
    }
}

export default App

//在Conditional.js
import React from "react"

function Conditional(props) {
    return <h1>Some cool stuff about conditional rendering</h1>
}

export default Conditional

//以下為part 2 螢幕上寫"You have 2 unread messages!"
import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: [
                "Call your mom!",
                "New spam email available. All links are definitely safe to click."
            ]
        }
    }
    // &&
    // false && false
    //這邊他寫如果有多於0條訊息那就顯示有幾條，沒有訊息的話就什麼都不顯示
    render() {
        return (
            <div>
                {
                    this.state.unreadMessages.length > 0 && 
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                }
            </div>
        )
    }
}

export default App