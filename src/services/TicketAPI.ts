import { ITicketLocalState } from "../models/ITicketState";
import pnp, { sp } from "@pnp/pnpjs";
import { CONST } from "../utils/const";
import { Ticket_Mapper, Ticket_Assigner } from "./Mapper";

export const createTicket = async (ticketState: ITicketLocalState) => {
  return await pnp.sp.web.lists
    .getByTitle(CONST.Lists.Tickets.ListName)
    .items.add(Ticket_Mapper(ticketState))
    .then(() => {
      console.log("successfully saved.");
      return true;
    })
    .catch(e => {
      console.log("Error while saving Tiket " + e.message);
      return false;
    });
};

export const getTicketByID = async (
  itemID: number
): Promise<ITicketLocalState> => {
  let ticketResponse: ITicketLocalState = null;
  // make an API call
  sp.web.lists
    .getByTitle(CONST.Lists.Tickets.ListName)
    .items.getById(itemID)
    .get()
    .then((item: any) => {
      Ticket_Assigner(item)
    });

  // ticketResponse = await ().then(res => {
  // 	console.log("TCL: getTicketByID -> res", res);
  //   Ticket_Assigner(res);

  // }).catch(e => return null);
  // return ticketResponse;
  return ticketResponse;
};
