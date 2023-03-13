import React from "react";
// import { withRouter } from "react-router";
import Color from "../HOC/Color";
import {connect} from 'react-redux'; //HOC component
import './Home.scss';
class Home extends React.Component{
    //sử dụng khi login or logon
    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.props.history.push('/todo');
    //     },3000)
    // }
    handleDeleteUser = (user) => {
        console.log('check user delete: ', user);
        this.props.deleteUserRedux(user);
    }
    handleCreateUser = () => {
        this.props.addUserRedux();
    }
    render () {
        console.log('check props: ', this.props);
        let listUsers = this.props.dataRedux;
        return (
            <>
            <h2 className="header">Redux Basic</h2>
            <div  className="home-content">
                {listUsers && listUsers.length >0 && listUsers.map((item,index)=>{
                    return (
                        <div key={item.id}>
                            {index + 1} - {item.name} 
                            <span onClick={() => this.handleDeleteUser(item)}> x</span>
                        </div>
                    )
                })}
                <button className="btn" onClick={() => this.handleCreateUser()}>Add new</button>
            </div>
            </>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {dataRedux : state.users} 
}
const mapDispathToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', payload: userDelete}),
        addUserRedux: () => dispatch({type: 'CREATE_USER'}),
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Color(Home));