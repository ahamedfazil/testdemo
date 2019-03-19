import { 
  DefaultButton ,
  Label,
  TextField 
} from 'office-ui-fabric-react';
import * as ReactDOM from 'react-dom';
import { NewTicketProps  } from '../containers/NewTicketProps';
import { Ticket } from '../../models/Ticket';
import React, { Component } from 'react';

export class NewTicket extends Component{

  render() {
    return (
   
        
    <div className="App">
        
        Fik<div className="ms-TextField">
        <label className="ms-Label">Name</label>
        <input className="ms-TextField-field" type="text" value="" placeholder=""/>

        </div>
          <DefaultButton>
            I am a button.
          </DefaultButton>
        </div>
        
      );}


    // const newTicket = ({ticket={},onNewTicket=f=>f}) => {
    //     //let ticket = new Ticket();
        
    //     const submit = e => {
    //         e.preventDefault()
    //         ticket = new Ticket();
    //         onNewTicket({
                 
                

    //         })
      
       // }
        
       
  //  }

}
export default NewTicket