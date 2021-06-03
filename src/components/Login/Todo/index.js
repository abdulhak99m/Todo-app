import React, { Component } from 'react'

export class TodoApp extends Component {
    render() {
        const {user}  = this.props;
        console.log(user)
        return (
            <div style={{padding:'20px'}}>
               <h2>Todo App</h2>
               <h5>Hii {user.email}<br/>Welcome to Todo App !</h5>
               <p style={{marginTop:'50px'}}>Work On Progress For Todo Lists</p>
               <a onClick={this.props.onLogoutClick} style={{textDecoration:'underline',position:'absolute',right:'10px',color:'blue',top:'20px'}}>Logout</a> 
            </div>
        )
    }
}

export default TodoApp
