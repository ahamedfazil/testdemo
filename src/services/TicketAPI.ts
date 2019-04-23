import { ITicketForm, ITicketFullComment } from "../models/ITicketState";
import pnp, { sp } from "@pnp/pnpjs";
import { CONST } from "../utils/const";
import { Ticket_Mapper } from "./Mapper";
import { Ticket_Assigner } from "./Assigner";

export const createTicket = async (ticketForm: ITicketForm) => {
  return await pnp.sp.web.lists
    .getByTitle(CONST.Lists.Tickets.ListName)
    .items.add(Ticket_Mapper(ticketForm))
    .then(() => {
      console.log("successfully saved.");
      return true;
    })
    .catch(e => {
      console.log("Error while creating Ticket" + e.message);
      return false;
    });
};

export const getTicketByID = async (
  itemID: number,
  localTicketForm: ITicketForm
): Promise<ITicketForm> => {
  // make an API call
  localTicketForm = await sp.web.lists
    .getByTitle(CONST.Lists.Tickets.ListName)
    .items.getById(itemID)
    .get()
    .then((item: any) => {
      return Ticket_Assigner(item, localTicketForm);
    })
    .catch(getTicketError => {
      console.log("getTicketError", getTicketError);
      localTicketForm.error = getTicketError;
      localTicketForm.isFetched = false;
      return localTicketForm;
    });
  return localTicketForm;
};

export const updateTicket = async (ticketForm: ITicketForm, itemID: number) => {
  return await pnp.sp.web.lists
    .getByTitle(CONST.Lists.Tickets.ListName)
    .items.getById(itemID)
    .update(Ticket_Mapper(ticketForm))
    .then(() => {
      console.log("successfully updated.");
      return true;
    })
    .catch(e => {
      console.log("Error while updating Ticket" + e.message);
      return false;
    });
};

export const updateComment = async (
  commentValue: ITicketFullComment,
  itemID: number
) => {
  return await pnp.sp.web.lists
    .getByTitle(CONST.Lists.Tickets.ListName)
    .items.getById(itemID)
    .update({
      [CONST.Lists.Tickets.Columns.kats_comments.Internal_Name]: JSON.stringify(
        commentValue
      )
    })
    .then(() => {
      console.log("successfully added comment.");
      return true;
    })
    .catch(e => {
      console.log("Error while adding comment" + e.message);
      return false;
    });
};
