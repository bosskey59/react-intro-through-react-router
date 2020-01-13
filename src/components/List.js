import React, { Component, PureComponent } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Person from './Person'
import PersonForm from './PersonForm'
import Clock from './Clock'


export default class List extends Component {
    constructor(props){
        super(props)
        this.state ={
            people:[{id:1,name:"alex" , age:30, luck: "25%"},{id:2,name:"Laura", age:20}, {id:3,name:"Caleb", age:21},
            {id:4,name:"Chyrelle", age:21},{id:5,name:"Michael", age:21, curiosity:"50%"}],
            lang: "React",
            showClock: true
        }
        console.log("1. List constructor")
    }

    // UNSAFE_componentWillMount(){
    //     console.log("2.List Component Will Mount")
    // }

    componentDidMount(){
        // fetch request to get data also returning React
        setTimeout(()=>{
            this.setState({lang:"React"})
        },2000)

        // fetch(url)
        // .then(resp => resp.json())
        // .then(data =>{
        //     th
        // })
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("component update")
    //     if (nextState.lang === this.state.lang){
    //         return false
    //     }else{
    //         return true
    //     }
    // }

    componentDidUpdate(){
        // charting
        console.log("component did update")
    }

    addPerson = (personData) =>{
        // personDate = this.state = PersonForm.state
        // give person an id
        const lastPersonIndex = this.state.people.length - 1
        const lastUsedId = this.state.people[lastPersonIndex].id
        const newId = lastUsedId + 1 
        personData.id = newId
        // setState with this new person included
        this.setState((prevState)=>{
            return{people: [...prevState.people, personData]}
        })
    }

    // toggleClock = () =>{
    //     this.setState((prevState)=>{
    //         return {showClock: !prevState.showClock}
    //     })
    // }

    deleteBtn = (id) =>{
    //    const filteredPpl = this.state.people.filter(person => id !== person.id)
    //    this.setState({people:filteredPpl})

    // fetch to delete said person .then when successful (setState)
    this.setState((prevState)=> {
        const filteredPpl = prevState.people.filter(person => id !== person.id)
        return{people: filteredPpl}
    })
    }

    render() {
        console.log("3. List Render")
        return (
            <Router>
                <div>
                    <Link to="/"><button>Home</button></Link>
                    <Link to="/clock"><button>Clock</button></Link>
                    <Link to="/new"><button>Add Person</button></Link>
                    
                    
                    {/* <Route exact path="/new">
                            <PersonForm addPerson={this.addPerson}/>
                    </Route> */}
                    <Switch>
                        <Route path="/clock" component={Clock} />
                        <Route path="/new" >
                            <PersonForm addPerson={this.addPerson}/>
                        </Route>
                        <Route path="/person/:num" render={({match})=>(<Person id={match.params.num} {...this.state.people.find(p => p.id === parseInt(match.params.num))} deleteBtn={this.deleteBtn} />)}/>
                        <Route path="/">
                            <div>
                                {this.state.people.map(person => <Person key={person.id} {...person} deleteBtn={this.deleteBtn}/>)}
                            </div>
                        </Route>  
                    </Switch>
                    
                </div>
            </Router>
        )
    }
}
