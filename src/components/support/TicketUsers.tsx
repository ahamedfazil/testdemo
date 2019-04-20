import * as React from "react";
import { PeoplePicker } from "./PeoplePicker";
import { Label } from "office-ui-fabric-react";
import { CONST } from "../../utils/const";

interface ITicketUsersProps {
  assigneeId: any;
  submitterId: any;
  watchers: any[];
  auditTeam: any[];
  engagementRiId: any;
  getUserValue?: (key: string, value: any[]) => void;
}

export const TicketUsers: React.SFC<ITicketUsersProps> = (
  props
): JSX.Element => {
  return (
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
      <Label>Submitter</Label>
        <PeoplePicker
          getUserNames={person => {
            props.getUserValue(CONST.Lists.Tickets.Columns.Submitted_x0020_ById.Internal_Name, person);
          }}
          defaultPeople={props.submitterId}
          allowMulti={false}
          disabled={false}
          placeholder={"Provide Submitter"}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
      <Label>Engagement RI</Label>
        <PeoplePicker
          getUserNames={person => {
            props.getUserValue(CONST.Lists.Tickets.Columns.Responsible_x0020_IndividualId.Internal_Name, person);
          }}
          defaultPeople={props.engagementRiId}
          allowMulti={false}
          disabled={false}
          placeholder={"Provide Engagement RI"}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
      <Label>Watchers</Label>
      <PeoplePicker
          getUserNames={person => {
            props.getUserValue(CONST.Lists.Tickets.Columns.WatcherId.Internal_Name, person);
          }}
          defaultPeople={props.watchers}
          allowMulti={true}
          disabled={false}
          placeholder={"Add Ticket watcher"}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
      <Label>Audit Team</Label>
      <PeoplePicker
          getUserNames={person => {
            props.getUserValue(CONST.Lists.Tickets.Columns.Audit_x0020_Team_x0020_CCId.Internal_Name, person);
          }}
          defaultPeople={props.watchers}
          allowMulti={true}
          disabled={false}
          placeholder={"Add Audit Team member to cc"}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Assignee</Label>
        <PeoplePicker
          getUserNames={person => {
            props.getUserValue(CONST.Lists.Tickets.Columns.AssigneeId.Internal_Name, person);
          }}
          defaultPeople={props.assigneeId}
          allowMulti={false}
          disabled={true}
        />
      </div>
    </div>
  );
};
