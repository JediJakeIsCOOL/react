import React, { Component } from 'react';
import FriendsListItems from './FriendsListItems';


class Hello extends Component {

  render() {

    let FriendsList;

    if(this.props.friendlist){
      FriendsList = this.props.friendlist.map( friend => {
       
        console.log(friend)

          return (
            <FriendsListItems key={friend.id} friend={friend} />
          )
      })
    }

    return (
      <div >

       {FriendsList} <br /> 
      This is a digital Craft class <br />
       
      </div>
    );
  }
}

export default Hello