import * as React from "react";
import { PeoplePicker } from "./PeoplePicker";
import { Label, TextField } from "office-ui-fabric-react";
import { CONST } from "../../utils/const";

interface ITicketRequestDetailProps {
  submitter: any;
  subject: string;
  detailedAnalysis: string;
  priority: string;
  getTicketRequestValue: (key: string, value: any) => void;
}

export const TicketRequestDetail: React.SFC<ITicketRequestDetailProps> = (
  props
): JSX.Element => {
  return (
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Submitter</Label>
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Subject</Label>
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Detail Analysis</Label>
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Priority</Label>
      </div>
    </div>
  );
};
