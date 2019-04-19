import * as React from "react";
import { PeoplePicker } from "./PeoplePicker";
import { Label } from "office-ui-fabric-react";

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
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
      <Label>Submitter</Label>
        <PeoplePicker
          getUserNames={person => {
            props.getUserValue("SubmitterId", person);
          }}
          defaultPeople={props.submitterId}
          allowMulti={false}
          disabled={false}
          placeholder={"Provide Submitter"}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
      <Label>Engagement RI</Label>
        <PeoplePicker
          getUserNames={person => {
            props.getUserValue("EngagementRiId", person);
          }}
          defaultPeople={props.engagementRiId}
          allowMulti={false}
          disabled={false}
          placeholder={"Provide Engagement RI"}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
      <Label>Watchers</Label>
      <PeoplePicker
          getUserNames={person => {
            props.getUserValue("SubmitterId", person);
          }}
          defaultPeople={props.watchers}
          allowMulti={true}
          disabled={false}
          placeholder={"Add Ticket watcher"}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
      <Label>Audit Team</Label>
      <PeoplePicker
          getUserNames={person => {
            props.getUserValue("AuditTeam", person);
          }}
          defaultPeople={props.watchers}
          allowMulti={true}
          disabled={false}
          placeholder={"Add Audit Team member to cc"}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
        <Label>Assignee</Label>
        <PeoplePicker
          getUserNames={person => {
            props.getUserValue("AssigneeId", person);
          }}
          defaultPeople={props.assigneeId}
          allowMulti={false}
          disabled={true}
        />
      </div>
    </div>
  );
};
