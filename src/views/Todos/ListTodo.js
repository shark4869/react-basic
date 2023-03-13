import React from 'react';
import AddTodo from './AddTodo';
import './ListTodo.scss';
import { MdEdit } from 'react-icons/md';
import { MdSave } from 'react-icons/md';
import { MdClose } from 'react-icons/md';

// import Color from "../HOC/Color";
import { toast } from 'react-toastify';
class ListTodo extends React.Component {
    state = {
        listTodos: [
            {id: 'todo1', title: 'Doing homework'},
            {id: 'todo2', title: 'Shopping'},
            {id: 'todo3', title: 'Cooking'},
        ],
        editTodo: {}
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Add success!");
    }
    handleDeleteTodo=(todo)=>{
        //console.log('check to do: ',todo)
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos
        })
         toast.success("Delete todo success!");
    }
    handleEditTodo = (todo) => {
        let {editTodo, listTodos} =this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        //save
        if(isEmptyObj===false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success('Update todo success');
            return;
        }
      
        //edit
        this.setState({
            editTodo: todo
        })
    }
    handleChangeEditTodo = (event) => {
        let editTodoCopy={...this.state.editTodo};
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }
    handleDeleteAll = () => {
        this.setState({
            listTodos: []
        })
         toast.success("Clear all success!");
    }
    render () {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
      
        return(
            <>
            <div className='todo-container'>
                <h2 className='title'>Simple Todo App</h2>
                <AddTodo 
                addNewTodo={this.addNewTodo} 
                />
                <div className='todo-content'>
                    {listTodos && listTodos.length > 0 && listTodos.map((item,index)=>{
                        return (
                              <div className='todo-child' key={item.id}>
                                {isEmptyObj===true ?
                                <p className='todo-item'>{item.title}</p>
                                :
                                <>
                                    {editTodo.id === item.id ?
                                        <span>
                                            <input value={editTodo.title} className="todo-item-edit" autoFocus
                                            onChange={(event) => this.handleChangeEditTodo(event)}/>
                                        </span>
                                        :
                                         <p className='todo-item'> {item.title}</p>
                                    }
                                </>}
                                <div className='todo-action'>

                                <button  className='todo-edit'
                                onClick={() => this.handleEditTodo(item)}
                                >
                                {isEmptyObj === false && editTodo.id === item.id ?
                                    <MdSave />:<MdEdit />
                                }
                                   </button>

                                <button className='todo-delete' 
                                onClick={()=>this.handleDeleteTodo(item)}
                                ><MdClose /></button>
                                </div>
                            </div>
                        )
                    })}
                    <div className='todo-bottom'>
                        <p>You have {listTodos.length} pending task</p>
                        <button className='todo-delete-all' 
                        onClick={()=>this.handleDeleteAll()}
                        >Clear All</button>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
export default ListTodo;