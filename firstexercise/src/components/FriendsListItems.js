import React, {Component} from 'react'

class FriendsListItems extends Component {
    
    render() {
      let agecheck;
      if(this.props.friend.age < 21){
        agecheck = "He can't party at moontower";
      }
      return (
       <li>
           <b>{this.props.friend.name}</b> - {this.props.friend.age}
           agecheck
           
        
       </li>
      );
    }
  }
export default FriendsListItems