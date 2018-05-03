import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import cartReducer from './reducer'

var store = createStore(cartReducer)


ReactDOM.render(
<Provider store = {store}>    
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
