import { ITicketDictionary } from "../models/ITicketState";
import pnp from "@pnp/pnpjs";

const createTicket = async (ticketState: ITicketDictionary) => {
  // await pnp.sp.web.lists
  //     .getByTitle("Ticket")
  //     .items.add(Ticket_Mapper(this.state))
  //     .then(() => {
  //       setTimeout(() => {
  //         this.setState({
  //           isProgress: false,
  //           showDialog: true,
  //           isSuccess: true,
  //           dialogLabel: "New Ticket site has been created successfully."
  //         });
  //       }, 3000);
  //     })
  //     .catch(e => {
  //       setTimeout(() => {
  //         this.setState({
  //           isProgress: false,
  //           showDialog: true,
  //           isSuccess: false,
  //           dialogLabel: "Error while creating for new ticket site."
  //         });
  //       }, 3000);
  //       console.log("Error " + e.message);
  //     });
};
