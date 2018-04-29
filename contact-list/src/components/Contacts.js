import React, {Component} from 'react'
import ContactItem from './ContactItem'


class Contacts extends Component{
    
      
    render(){
        
        let contacts;

        if(this.props.contactList)
        contacts = this.props.contactList.sort((a,b) => a.name > b.name).map(contact =>{
            return (
                <ContactItem  contact = {contact}/>
            )
        } 
        
        )


            return (
                <div>
            {contacts.sort()} <br />
            these are my contacts
            
            </div>

        )
    }
}


export default Contacts