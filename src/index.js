import React from 'react';
import ReactDOM from 'react-dom/client';
import {createStore} from "redux";
import filteredGamesReducer from './reducers/filteredGamesReducer';
import App from './App/App';
import { Provider } from 'react-redux';




const store = createStore(filteredGamesReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);
