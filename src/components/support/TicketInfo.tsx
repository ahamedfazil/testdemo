import * as React from "react";
import { PeoplePicker } from "./PeoplePicker";
import { Label, TextField, Dropdown, Checkbox } from "office-ui-fabric-react";
import { CONST } from "../../utils/const";
import {
  dropdownOptions,
  tagPickerOptionGenerator,
  kendoComboOptionGenerator
} from "../../utils/Utilities";
import { ITicketDictionary } from "../../models/ITicketState";
import { KendoCombo } from "./KendoCombo";
import { KatsTagPicker } from "./KatsTagPicker";

interface ITicketInfoProps {
  ticketId: string;
  status: string;
  category: string;
  categoryTitleOptions: any[];
  supportTeam: string;
  requiredConsultation: boolean;
  topics: any[];
  topicsOptions: any[];
  accountingFrameworks: string[];
  auditingStandards: string[];
  getTicketInfoValue?: (
    key: string,
    value: any | any[],
    isCategory?: boolean
  ) => void;
  getTicketInfoValueMulti: (key: string, option: any, index: number) => void;
  ticketDictionary: ITicketDictionary;
}

export const TicketInfo = React.memo(
  (props: ITicketInfoProps): JSX.Element => (
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
            props.getTicketInfoValue(
              CONST.Lists.Tickets.Columns.OData__Status.Internal_Name,
              option.key
            );
          }}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Category</Label>
        <KendoCombo
          textValue={props.category}
          getValue={value => {
            props.getTicketInfoValue(
              CONST.Lists.Tickets.Columns.OData__Category.Internal_Name,
              value,
              true
            );
          }}
          placeholder={"Enter Category"}
          isRemote={false}
          fullValues={kendoComboOptionGenerator(props.categoryTitleOptions)}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Support Team</Label>
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
        <Checkbox
          name={
            CONST.Lists.Tickets.Columns.Required_x0020_Consultation
              .Internal_Name
          }
          label={"Required Consultation"}
          defaultChecked={props.requiredConsultation}
          onChange={(event: any, checked: boolean) =>
            props.getTicketInfoValue(event.target.name, checked)
          }
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Topics</Label>
        <KatsTagPicker
          getValues={val => {
            props.getTicketInfoValue(
              CONST.Lists.Tickets.Columns.Topics.Internal_Name,
              val
            );
          }}
          headerText="Suggested Topics"
          noResultText="No Topics Found"
          getOnBlur={() => {}}
          placeholder={"Enter Topics"}
          values={props.topics}
          options={tagPickerOptionGenerator(props.topicsOptions)}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Accounting Frameworks</Label>
        <Dropdown
          placeholder={"Select Accounting Frameworks"}
          options={dropdownOptions(props.ticketDictionary.accountingFramework)}
          selectedKeys={props.accountingFrameworks}
          multiSelect
          onChange={(event: any, option: any) => {
            const index = props.accountingFrameworks.indexOf(option.key);
            props.getTicketInfoValueMulti(
              CONST.Lists.Tickets.Columns.Accounting_x0020_Framework
                .Internal_Name,
              option,
              index
            );
          }}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Auditing Standards</Label>
        <Dropdown
          placeholder={"Select Auditing Standards"}
          options={dropdownOptions(props.ticketDictionary.auditingStandard)}
          selectedKeys={props.auditingStandards}
          multiSelect
          onChange={(event: any, option: any) => {
            const index = props.auditingStandards.indexOf(option.key);
            props.getTicketInfoValueMulti(
              CONST.Lists.Tickets.Columns.Auditing_x0020_Standards
                .Internal_Name,
              option,
              index
            );
          }}
        />
      </div>
    </div>
  )
);
