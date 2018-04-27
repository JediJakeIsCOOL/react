import React, { Component } from 'react';
import Hello from './components/Hello'

class App extends Component {
  constructor(){
  super()
  this.state = {
    friendList: []
  }
  }

  setFriends(){
    this.setState({friendList: [{
      id: '1',
      name: 'John',
      age: '28'
    },
    {
      id: '2',
      name: 'JonJon',
      age: '21'
    },
    {
      id: '3',
      name: 'George',
      age: '20'
    }
    ]
    })
  }
  componentWillMount(){
    this.setFriends()
  }
  render() {
    return (
       <div>
         <Hello name='jake' friendlist= {this.state.friendList} />
       </div>
    )
  }
}

export default App;
