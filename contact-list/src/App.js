//page where we start our application that gets rendered into the root id 
import React, {Component} from 'react'
import Contacts from './components/Contacts'
import AddContact from './components/AddContact'


class App extends Component{
  constructor(){
    super()
    this.state = {
      contactList: []
    }
  }
  
  
  setContacts(){
    this.setState({contactList: [{
      name: 'Jake',
      email: 'Jake@jake.com',
      city: 'Houston',
      state: 'Texas',
      zip: '77063',
    },
    {
      name: 'John',
      email: 'John@jake.com',
      city: 'San Marcos',
      state: 'Texas',
      zip: '77666',
    },
    {
      name: 'Andrew',
      email: 'James@jake.com',
      city: 'Lafayette',
      state: 'Lousiana',
      zip: '56670'
      
    }
    ]
    })
  }
  componentWillMount(){
    this.setContacts()
  }


  handleAddContact(contact){
    console.log("what is being sent to us")
    console.log(contact)

    let contacts  = this.state.contactList;
    contacts.push(contact);
    this.setState({contacts:contacts})
  }
  
  render(){
    return(
      <div>
      <Contacts contactList= {this.state.contactList}/>
      <AddContact addContact ={this.handleAddContact.bind(this)}/>
       hi 
       </div>
      
    )
  }

}

export default App