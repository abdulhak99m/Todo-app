import React, { Component } from 'react'

export class TodoApp extends Component {
    render() {
        return (
            <div>
               Todo App
               <a onClick={this.props.onLogoutClick} style={{textDecoration:'underline'}}>Logout</a> 
            </div>
        )
    }
}

export default TodoApp
