import React, {Component} from 'react';

class Lista extends Component{
    render(){
        return (
            <ol>{this.props.students.map((names, index) => 
            <li key = {index}>{names} <button onClick = {
                ()=>{
                    this.props.onRemoveName(names);
                }}>Remover</button></li>)}</ol>
        );
    }
}

export default Lista;