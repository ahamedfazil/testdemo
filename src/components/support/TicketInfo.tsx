import * as React from "react";
import { PeoplePicker } from "./PeoplePicker";
import { Label, TextField, Dropdown } from "office-ui-fabric-react";
import { CONST } from "../../utils/const";
import {
  dropdownOptions,
  tagPickerOptionGenerator
} from "../../utils/Utilities";
import { ITicketDictionary } from "../../models/ITicketState";
import { KendoCombo } from "./KendoCombo";
import { KatsTagPicker } from "./KatsTagPicker";

interface ITicketInfoProps {
  ticketId: string;
  status: string;
  category: string;
  supportTeam: string;
  requiredConsultation: boolean;
  topics: any[];
  accountingFrameworks: string[];
  auditingStandards: string[];
  getTicketInfoValue?: (key: string, value: any) => void;
  getTicketOptions?: (key: string, option: any) => void;
  ticketDictionary: ITicketDictionary;
}

export const TicketInfo: React.SFC<ITicketInfoProps> = (props): JSX.Element => {
  return (
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Ticket ID</Label>
        <TextField
          onChange={(event: any, value: string) => {
            props.getTicketInfoValue(event.target.name, value);
          }}
          value={props.ticketId}
          name={CONST.Lists.Tickets.Columns.TicketId.Internal_Name}
          placeholder={"KATS-00001"}
          disabled={true}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Status</Label>
        <Dropdown
          placeholder={"Select Status"}
          options={dropdownOptions(props.ticketDictionary.status)}
          selectedKey={props.status}
          onChange={(event: any, option: any) => {
            props.getTicketOptions(
              CONST.Lists.Tickets.Columns.OData__Status.Internal_Name,
              option.key
            );
          }}
        />
      </div>
      {/* <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Category</Label>
        <KendoCombo
          placeholder={"Select Category"}
          options={dropdownOptions(props.ticketDictionary.category)}
          selectedKey={props.category}
          onChange={(key, option: any) => {
            props.getTicketOptions(CONST.Lists.Tickets.Columns._Category.Internal_Name, option.key);
          }}
        />
      </div> */}
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Support Team</Label>
        &nbsp;
        <i
          className="ms-Icon ms-Icon--Group"
          style={{ fontSize: "18px" }}
          aria-hidden="true"
        />
        <TextField
          value={props.supportTeam}
          readOnly={true}
          placeholder={"Set Based On Category"}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Required Consultation</Label>
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Topics</Label>
        <KatsTagPicker
          getValues={val => {
            props.getTicketOptions(
              CONST.Lists.Tickets.Columns.Topics.Internal_Name,
              val
            );
          }}
          headerText="Suggested Topics"
          noResultText="No Topics Found"
          getOnBlur={() => {}}
          placeholder={"Enter Topics"}
          values={props.topics}
          options={tagPickerOptionGenerator(props.ticketDictionary.topic)}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Accounting Frameworks</Label>
        <Dropdown
          placeholder={"Select Accounting Frameworks"}
          options={dropdownOptions(props.ticketDictionary.accountingFramework)}
          selectedKey={props.accountingFrameworks}
          multiSelect
          onChange={(option: any) => {
            props.getTicketOptions(
              CONST.Lists.Tickets.Columns.Accounting_x0020_Framework
                .Internal_Name,
              option.key
            );
          }}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Auditing Standards</Label>
        <Dropdown
          placeholder={"Select Auditing Standards"}
          options={dropdownOptions(props.ticketDictionary.auditingStandard)}
          selectedKey={props.auditingStandards}
          multiSelect
          onChange={(key, option: any) => {
            props.getTicketOptions(
              CONST.Lists.Tickets.Columns.Auditing_x0020_Standards
                .Internal_Name,
              option.key
            );
          }}
        />
      </div>
    </div>
  );
};
