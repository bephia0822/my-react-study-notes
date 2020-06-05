//一樣是之前的按按鈕數字從0開始改變，這次除了往上加的increment，還做了往下減的decrement，每按一次數字改變之外顏色也都跟著變，真的有酷

// https://scrimba.com/g/greacthooks
// Uncaught Invariant Violation: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.

import React from "react"
import randomcolor from "randomcolor"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            color: ""
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    
    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    decrement() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            const newColor = randomcolor()
            this.setState({color: newColor})
        }
    }
    
    render() {
        return (
            <div>
                <h1 style={{color: this.state.color}}>{this.state.count}</h1>
                <button onClick={this.increment}>
                    Increment!
                </button>
                <button onClick={this.decrement}>
                    Decrement!
                </button>
            </div>
        )
    }
}

export default App



//另外他說可能有人會說下面這種寫法不是比較簡單嗎？他說如果你有很多東西的話就會很亂所以還是建議用上面的寫法
import React from "react"
import randomcolor from "randomcolor"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            color: ""
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    
    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1,
                color: randomcolor()
            }
        })
    }
    decrement() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1,
                color: randomcolor()
            }
        })
    }
    
    // componentDidUpdate(prevProps, prevState) {
    //     if(prevState.count !== this.state.count) {
    //         const newColor = randomcolor()
    //         this.setState({color: newColor})
    //     }
    // }
    
    render() {
        return (
            <div>
                <h1 style={{color: this.state.color}}>{this.state.count}</h1>
                <button onClick={this.increment}>
                    Increment!
                </button>
                <button onClick={this.decrement}>
                    Decrement!
                </button>
            </div>
        )
    }
}

export default App