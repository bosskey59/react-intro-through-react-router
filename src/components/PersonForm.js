import React, { Component } from 'react'


export default class PersonForm extends Component {

    constructor(props) {
        super(props)
        this.formName = React.createRef()
        this.formAge = React.createRef()
        this.formLuck = React.createRef()
        this.state = {
             name:"",
             age:0,
             luck:""
        }
    }
    

    handleSubmit = (e) =>{
        e.preventDefault()
        // const person = {}
        // person.name = this.formName.current.value
        // person.age = this.formAge.current.value
        // person.luck = this.formLuck.current.value
        // person.name = e.target.querySelector("#person-name").value
        // person.age = e.target.querySelector("#person-age").value
        // person.luck = e.target.querySelector("#person-luck").value
        const person = {...this.state}

        this.props.addPerson(person)
        
        this.setState({
            name:"",
            age: 0,
            luck:""
        })

    }

    // nameChange = (e) =>{
    //     // do some type of validations in real time
    //     this.setState({
    //         name:e.target.value
    //     })
    // }
    // ageChange = (e) =>{
    //     // do some type of validations in real time
    //     this.setState({
    //         age:e.target.value
    //     })
    // }

    // luckChange = (e) =>{
    //     // do some type of validations in real time
    //     this.setState({
    //         luck:e.target.value
    //     })
    // }

    handleChange= (e) =>{
        this.setState({
           [e.target.name]:e.target.value
        }) 
    }

    render() {
        
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" id="person-name" ref={this.formName} onChange={this.handleChange} value={this.state.name}/>
                <label>Age:</label>
                <input type="number" name="age" id="person-age" ref={this.formAge} onChange={this.handleChange} value={this.state.age}/>
                <label>Luck(%):</label>
                <input type="text" name="luck" id="person-luck" ref={this.formLuck} onChange={this.handleChange} value={this.state.luck}/>
                <input type="submit"/>
            </form>
        )
    }
}
