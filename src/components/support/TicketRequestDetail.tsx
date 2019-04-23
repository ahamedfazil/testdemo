import * as React from "react";
import { PeoplePicker } from "./PeoplePicker";
import { Label, TextField, Dropdown } from "office-ui-fabric-react";
import { CONST } from "../../utils/const";
import { dropdownOptions } from "../../utils/Utilities";
import { RichTextEditor } from "./RichTextEditor";

interface ITicketRequestDetailProps {
  submitter: any[];
  isDisabled?: boolean;
  subject: string;
  detailedAnalysis: string;
  priority: string;
  reasonForUrgency: string;
  getTicketRequestValue: (key: string, value: any | any[]) => void;
}

export const TicketRequestDetail = React.memo(
  (props: ITicketRequestDetailProps): JSX.Element => (
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
          disabled={props.isDisabled}
          placeholder={"Provide Submitter"}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Subject</Label>
        <TextField
          onChange={(event: any, value: string) => {
            props.getTicketRequestValue(event.target.name, value);
          }}
          value={props.subject}
          name={CONST.Lists.Tickets.Columns.Title.Internal_Name}
          placeholder={"Title of the Ticket"}
          disabled={false}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Detail Analysis</Label>
        <RichTextEditor
          value={props.detailedAnalysis}
          getEvent={event => {
            props.getTicketRequestValue(
              CONST.Lists.Tickets.Columns.Detailed_x0020_Analysis.Internal_Name,
              event.sender.body.innerHTML
            );
          }}
          placeholder="Enter brief description"
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Priority</Label>
        <Dropdown
          placeholder={"Select Priority"}
          options={dropdownOptions(["Normal", "Urgent"])}
          selectedKey={props.priority}
          onChange={(event: any, option: any) => {
            props.getTicketRequestValue(
              CONST.Lists.Tickets.Columns.Priority.Internal_Name,
              option.key
            );
          }}
        />
      </div>
      {props.priority === "Urgent" && (
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
          <Label>Reason For Urgency</Label>
          <TextField
            onChange={(event: any, value: string) => {
              props.getTicketRequestValue(event.target.name, value);
            }}
            value={props.reasonForUrgency}
            name={
              CONST.Lists.Tickets.Columns.Reason_x0020_for_x0020_Urgency
                .Internal_Name
            }
            placeholder={"Enter reason for urgency"}
            multiline
            rows={5}
          />
        </div>
      )}
    </div>
  )
);
