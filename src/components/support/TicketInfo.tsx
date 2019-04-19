import * as React from "react";
import { PeoplePicker } from "./PeoplePicker";
import { Label, TextField, Dropdown } from "office-ui-fabric-react";
import { CONST } from "../../utils/const";
import { dropdownOptions } from "../../utils/Utilities";
import { ITicketDictionary } from "../../models/ITicketState";
import IStore from "../../store/IStore";

interface ITicketInfoProps {
  ticketId: string;
  status: string;
  category: string;
  requiredConsultation: boolean;
  topics: any[];
  accountingFrameworks: string[];
  auditingStandards: string[];
  getTicketInfoValue?: (key: string, value: any) => void;
  getTicketOptions?: (key: string, option: any) => void;
  store?: IStore;
}

export const TicketInfo: React.SFC<ITicketInfoProps> = (props): JSX.Element => {
  const ticketDictionary: ITicketDictionary =
    props.store.ticket.ticketDictionary;
  return (
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
        <Label>Ticket ID</Label>
        <TextField
          onChange={text => {
            props.getTicketInfoValue("TicketId", text);
          }}
          value={props.ticketId}
          name={CONST.Lists.Tickets.Columns.TicketId.Internal_Name}
          placeholder={"KATS-00001"}
          disabled={true}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
        <Label>Status</Label>
        <Dropdown
          placeholder={"Select Status"}
          options={dropdownOptions(ticketDictionary.status)}
          selectedKey={props.status}
          onChange={(key, option: any) => {
            props.getTicketOptions("OData_Status", option.key);
          }}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
        <Label>Category</Label>
        <Dropdown
          placeholder={"Select Category"}
          options={dropdownOptions(ticketDictionary.category)}
          selectedKey={props.category}
          onChange={(key, option: any) => {
            props.getTicketOptions("_category", option.key);
          }}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
        <Label>Required Consultation</Label>
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
        <Label>Topics</Label>
        <Dropdown
          placeholder={"Select related topics"}
          options={dropdownOptions(ticketDictionary.topic)}
          selectedKey={props.topics}
          onChange={(key, option: any) => {
            props.getTicketOptions("Topics", option.key);
          }}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
        <Label>Accounting Frameworks</Label>
        <Dropdown
          placeholder={"Select Accounting Frameworks"}
          options={dropdownOptions(ticketDictionary.accountingFramework)}
          selectedKey={props.accountingFrameworks}
          onChange={(option: any) => {
            props.getTicketOptions("Accounting_x0020_Framework", option.key);
          }}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg12">
        <Label>Auditing Standards</Label>
        <Dropdown
          placeholder={"Select Auditing Standards"}
          options={dropdownOptions(ticketDictionary.auditingStandard)}
          selectedKey={props.auditingStandards}
          onChange={(key, option: any) => {
            props.getTicketOptions("Auditing_x0020_Standards", option.key);
          }}
        />
      </div>
    </div>
  );
};
