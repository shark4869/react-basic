import React from "react";
import axios from "axios";
import './ListUser.scss';
import { withRouter } from "react-router";

class ListUser extends React.Component {
    state = {
        listUser: [],
        showMore: false,
        limit: 3
    }
   
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1');
        // console.log('check data: ',res.data.data);
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : [],
        })
    }
    handleViewDetailUser=(user)=>{
        // console.log('check user: ',user);
        this.props.history.push(`/user/${user.id}`);
    }
    handleViewMore = () => {
    this.setState({ 
        showMore: true ,
        limit: null
    });
  }
    handleHide = () => {
        this.setState({ 
        showMore: false,
        limit: 3
        });
    }
    render () {
        let { listUser, showMore, limit }=this.state;
        let listUserRender = listUser.slice(0, limit);
        // console.log('check props: ', this.props)
        return (
            <div className="user-container">
                <h2 className="title">Featch all list users</h2>
                <div className="user-content">
                    {showMore && 
                        <>
                        {listUser && listUser.length > 0 && listUser.map((item,index)=>{
                        return(
                            <div className="user-child" key={item.id} >
                                <div className="user-info">
                                    <img className="user-img" src={item.avatar} alt="avatar" />
                                    <span className="user-name">{item.first_name} {item.last_name}</span>   
                                </div>
                                 <button type="button" className="user-view" 
                                 onClick={() => this.handleViewDetailUser(item)}
                                 >View</button>
                            </div>
                        )
                        }) }
                        <button className="user-view-all" onClick={this.handleHide} >Hide</button>
                        </>
                    }
                     {!showMore && 
                        <>
                        {listUserRender && listUserRender.length > 0 && listUserRender.map((item,index)=>{
                        return(
                            <div className="user-child" key={item.id} 
                            >
                                <div className="user-info">
                                    <img className="user-img" src={item.avatar} alt="avatar" />
                                    <span className="user-name">{item.first_name} {item.last_name}</span>   
                                </div>
                                 <button type="button" className="user-view" 
                                 onClick={() => this.handleViewDetailUser(item)}
                                 >View</button>
                            </div>
                        )
                        }) }
                       <button className="user-view-all" onClick={this.handleViewMore} >View all</button>
                        </>
                    }
                </div>
                   
            </div>
        )
    }
}
export default withRouter(ListUser);