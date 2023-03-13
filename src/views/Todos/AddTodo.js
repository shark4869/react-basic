import React from "react";
import { IoMdAdd } from 'react-icons/io';
import { toast } from 'react-toastify';
class AddTodo extends React.Component{
    state={
        title: '',
    }
    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddTodo = () => {
        if(!this.state.title){
            toast.error("Missing title!");
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }
        this.props.addNewTodo(todo);
        this.setState({
            title: ''
        })
    }
    render() {
        let {title}=this.state;
        return (
            <div className='todo-add'>
                    <input type="text" className="todo-add-input" placeholder="Add you new todo"
                    value={title}
                    onChange={(event) => this.handleChangeTitle(event)} />

                    <button type='button' className='todo-add-btn'
                    onClick={() => this.handleAddTodo()}
                    ><IoMdAdd/></button>
            </div>
        )
    }
}
export default AddTodo;