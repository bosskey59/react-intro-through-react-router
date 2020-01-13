import React, { Component } from 'react'

export default class Clock extends Component {

    state = {
        date: new Date(),
        showClock: true
    }

    startClock = () =>{
        this.interval = setInterval(() => {
            this.tick()
        }, 1000);
    }

    tick = () =>{
        this.setState({date: new Date()})
    }

    componentDidMount(){
        this.startClock()
    }

    toggleClock = () =>{
        this.setState((prevState)=>{
            return {showClock: !prevState.showClock}
        })
    }

    componentWillUnmount(){
        // console.log("clock unmount")
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <h2>{this.state.showClock ? this.state.date.toLocaleString() : null}</h2>
                <button onClick={this.toggleClock}>{this.state.showClock ? "Hide Clock": "Show Clock"}</button>
            </div>
        )
    }
}


