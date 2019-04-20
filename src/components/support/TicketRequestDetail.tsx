import * as React from "react";
import { PeoplePicker } from "./PeoplePicker";
import { Label, TextField, Dropdown } from "office-ui-fabric-react";
import { CONST } from "../../utils/const";

interface ITicketRequestDetailProps {
  submitter: any[];
  subject: string;
  detailedAnalysis: string;
  priority: string;
  getTicketRequestValue: (key: string, value: any | any[]) => void;
}

export const TicketRequestDetail: React.SFC<ITicketRequestDetailProps> = (
  props
): JSX.Element => {
  return (
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Submitter</Label>
        <PeoplePicker
          getUserNames={person => {
            props.getTicketRequestValue(
              CONST.Lists.Tickets.Columns.Submitted_x0020_ById.Internal_Name,
              person
            );
          }}
          defaultPeople={props.submitter}
          allowMulti={false}
          disabled={false}
          placeholder={"Provide Submitter"}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Subject</Label>
        <TextField
          onChange={text => {
            props.getTicketRequestValue(
              CONST.Lists.Tickets.Columns.Title.Internal_Name,
              text
            );
          }}
          value={props.subject}
          name={CONST.Lists.Tickets.Columns.Title.Internal_Name}
          placeholder={"Title of the Ticket"}
          disabled={false}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Detail Analysis</Label>
        <TextField
          onChange={text => {
            props.getTicketRequestValue(
              CONST.Lists.Tickets.Columns.Detailed_x0020_Analysis.Internal_Name,
              text
            );
          }}
          value={props.subject}
          name={
            CONST.Lists.Tickets.Columns.Detailed_x0020_Analysis.Internal_Name
          }
          placeholder={"Enter brief description"}
          disabled={false}
          multiline
          rows={5}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Priority</Label>
        <Dropdown
          placeholder={"Select Priority"}
          options={[{ key: 0, text: "Normal" }, { key: 1, text: "Urgent" }]}
          selectedKey={props.priority}
          onChange={(event: any, option: any) => {
            props.priority = option.key;
          }}
        />
      </div>
    </div>
  );
};
