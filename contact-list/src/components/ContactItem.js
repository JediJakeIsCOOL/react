import React, {Component} from 'react'




class ContactItem extends Component{
   render(){
       return(
           <div>
           <b>{this.props.contact.name}</b> - {this.props.contact.city} - {this.props.contact.state}
           </div>
       )
   }
}




export default ContactItem