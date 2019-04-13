import { ITicketLocalState } from "../models/ITicketState";
import { CONST } from "../utils/const";

export const Ticket_Mapper = (value: ITicketLocalState) => {
  const ticket_Mapper: any = {
    [CONST.Lists.Tickets.Columns.Title.Internal_Name]: value.Title,
    [CONST.Lists.Tickets.Columns.Submitted_x0020_ById
      .Internal_Name]: value.Submitted_x0020_ById && value.Submitted_x0020_ById.map(
        (user: any) => {
          return user.Id;
        }
      )[0]
  };
  return ticket_Mapper;
};
