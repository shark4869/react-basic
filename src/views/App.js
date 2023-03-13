
import './App.scss';
import Home from './Home/Home';
import ListTodo from './Todos/ListTodo';
import Nav from './Nav/Nav';
import ListUser from './User/ListUser';
import DetailUser from './User/DetailUser';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
           <Switch>
            <Route path="/" exact >
              <Home/>
            </Route>
            <Route path="/todo" >
              <ListTodo/>
            </Route>
            <Route path="/about" >
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id" >
              <DetailUser />
            </Route>
          </Switch> 
        </header>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
      </div>
    </Router>
  );
}

export default App;
