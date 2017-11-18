import React, {Component} from 'react'

export default class Todo extends Component {
        render(){
        let {id,todo,onRemove} = this.props
        return(
            <li>{todo} <button className="X" onClick={() => onRemove(id)}>X</button></li>
        )
    }
}