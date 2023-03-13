import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import Button from './views/Hook/Test';

import App from './views/App';
import reportWebVitals from './reportWebVitals';
// const reduxStore = createStore(rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={reduxStore}>
//       <App />
//     </Provider>
//   </React.StrictMode>, 
//   document.getElementById('root'));
  ReactDOM.render(
  <React.StrictMode>
      <Button />
  </React.StrictMode>, 
  document.getElementById('root'));
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


reportWebVitals();
