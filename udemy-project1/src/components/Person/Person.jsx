
import React from 'react';
import './Person.css'
const Person = (props) =>{
    return(
            <div className='Person'>
                <p onClick={props.click}>I'm a {props.name} and I'm a {props.age } years old</p>
                <p>{props.children}</p>
                <input type="text" className='form-control' onChange={props.change} value={props.name}/>
            </div>
    )
}

export default Person;