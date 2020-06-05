//現在螢幕上有一個大大的"0"底下有一個按鈕寫“Change!"
import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button>Change!</button>
            </div>
        )
    }
}

export default App


//按下Change!紐會出現"I'm working!"ＸＤ
import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    
    handleClick() {
        console.log("I'm working!")
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}

export default App


//OK這真的有酷到，按下按鈕後從0開始往上加數字，每按一次加一
import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)        //這裡設一個bind讓他可以跟下面的連結在一起
    }
    
    handleClick() {
        this.setState(prevState => {                          //因為前面已經用過state了，這邊用setState，因為要用到之前的state所以寫prevState(previous state)
            return {
                count: prevState.count + 1
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}

export default App