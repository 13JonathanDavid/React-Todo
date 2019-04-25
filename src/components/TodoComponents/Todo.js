import React, { Component } from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            todoList : (props.todoData ? props.todoData: [])
        };
    
    }
    
    render(){
    return (
        <div className="container">
            <TodoList tasks={this.state.todoList} cb_click={i => this.clickCallback(i)}/>
            <TodoForm cb_submit = {s => this.submitCallback(s)} cb_clear = {()=>this.clearCallback()}/>
        </div>
    );
    }
    clickCallback (i) {
        let arr = this.state.todoList;
        arr[i].completed = !arr[i].completed;
        this.setState({todoList: arr});
    }
    submitCallback(s){
        this.setState({todoList : [...this.state.todoList,{task: s, id : Date.now(), completed : false}]});
    }
    clearCallback(){
        this.setState({ todoList : this.state.todoList.filter((x)=>!x.completed)});
    }
}
export default Todo;