import React from "react"

// Challenge:
// Given an incomplete class-based component without a constructor, 
// add a constructor and initialize state to fix the broken component.

class App extends Component() {
    return (
        <div>
            <h1>{this.state.name}</h1>
            <h3>{this.state.age} years old</h3>
        </div>
    )    
}

export default App


//我算是半答對？忘記加逗點導致age那邊有問題。另外開頭import沒改得跟他一樣居然也能跑？這我就不清楚了
import React from "react"

// Challenge:
// Given an incomplete class-based component without a constructor, 
// add a constructor and initialize state to fix the broken component.

class App extends React.Component {
    constructor(){
       super()
       this.state = {
           name: "Sophia",
           age: 28
       }
    } 
    
    render(){
    return (
        <div>
            <h1>{this.state.name}</h1>
            <h3>is {this.state.age} years old</h3>
        </div>
    )    
}
}
export default App
//出現在螢幕上是Sophia is 28 years old

//老師的
import React, {Component} from "react"

// Challenge:
// Given an incomplete class-based component without a constructor, 
// add a constructor and initialize state to fix the broken component.

class App extends Component {
    constructor() {
        super()
        this.state = {
            name: "Sally",
            age: 13
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )    
    }
}

export default App





//沒想到老師又出了practice 2!
import React from "react"

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

function App() {
    return (
        <div>
            <h1>You are currently logged (in/out)</h1>
        </div>
    )
}

export default App


//我寫對一半到isLoggedIn那邊ＸＤ，看老師解答吧
import React from "react"
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true                  //如果把這邊改成false, 視窗就會寫You are currently logged out
        }
    }
    
    render() {
        let wordDisplay
        if (this.state.isLoggedIn === true) {
            wordDisplay = "in"
        } else {
            wordDisplay = "out"
        }
        return (
            <div>
                <h1>You are currently logged {wordDisplay}</h1>
            </div>
        )
    }
}

export default App
//旁邊視窗就會顯示You are currently logged in