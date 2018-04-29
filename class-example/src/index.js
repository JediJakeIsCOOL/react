import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();



//create a form that takes in the fields: name, e-mail, phone number , address, city, state, and zip
//after being added the initial list should be appended to 
//create initial data that will always be there on reload
//contact list should always be sorted in alphabetical order by name
//actual view of the list only shows name, city, state
//after clicking all contacts info should be displayed