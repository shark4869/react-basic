import axios from "axios";
import React from "react";
import { MdArrowBack } from 'react-icons/md';
import { withRouter } from "react-router";
class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if(this.props.match && this.props.match.params){
            let id = this.props.match.params.id;
            let res=await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
            // console.log(res.data.data);
        }
        
    }
    handleClickBack=()=>{
        this.props.history.push('/user');
    }
    render () {
        // console.log('match: ',this.props.match)
        let {user} = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        return(
            <>
            {isEmptyObj === false && 
                <div className="user-container">
                    <h2 className="title">User detail</h2>
                    <div className="user-detail">
                        <img className="user-img" src={user.avatar} alt="avatar" />
                        <p className="user-des" >{user.first_name} {user.last_name}</p>
                        <p className="user-des">{user.email}</p>
                        
                    </div>
                    <button className="btn-back" onClick={()=>this.handleClickBack()}><MdArrowBack /></button>
                </div>
                }
            </>
        )
    }
}
export default withRouter(DetailUser);