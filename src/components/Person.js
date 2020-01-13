import React, {Component} from 'react';

// class Person extends Component{
//     render(){
//         return(
//             <>
//                 <p>Name:{this.props.person.name}</p>
//                 <p>Age:{this.props.person.age}</p>
//             </>
//         )
//     }
// }

function Person({id, name, age, luck, deleteBtn}) {
    return (
        <>
            <p>{name} is {age} yrs old, and has {luck} luck. <button onClick={()=> deleteBtn(id)}>X</button></p> 
         </>
    )
}

Person.defaultProps={
    luck:"20%"
}

export default Person
