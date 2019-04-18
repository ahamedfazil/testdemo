import * as React from "react";
import { PeoplePicker } from "./PeoplePicker";
import { Label } from "office-ui-fabric-react";

interface ITicketUsersProps {
  assigneeId: any;
  getUserValue?: (key: string, value: any[]) => void;
}

export const TicketUsers: React.SFC<ITicketUsersProps> = (
  props
): JSX.Element => {
  return (
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
        <label className="ms-Label">Submitter</label>
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
        <label className="ms-Label">Watcher List</label>
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
          placeholder={"Provide Assignee"}
        />
      </div>
    </div>
  );
};
