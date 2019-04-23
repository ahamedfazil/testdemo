import * as React from "react";
import { PeoplePicker } from "./PeoplePicker";
import {
  Label,
  TextField,
  Dropdown,
  DatePicker,
  Checkbox
} from "office-ui-fabric-react";
import { CONST } from "../../utils/const";
import { ITicketDictionary } from "../../models/ITicketState";
import {
  dropdownOptions,
  tagPickerOptionGenerator
} from "../../utils/Utilities";
import { KatsTagPicker } from "./KatsTagPicker";
import { RichTextEditor } from "./RichTextEditor";

interface ISupportFieldsProps {
  conclusion: string;
  ticketType: string;
  training: boolean;
  addToKb: boolean;
  faq: boolean;
  labels: string[];
  getSupportFieldValues: (key: string, value: any) => void;
  ticketDictionary: ITicketDictionary;
}

export const TicketSupportFields: React.SFC<ISupportFieldsProps> = (
  props
): JSX.Element => {
  return (
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Conclusion</Label>
        <RichTextEditor
          value={props.conclusion}
          getEvent={event => {
            props.getSupportFieldValues(
              CONST.Lists.Tickets.Columns.Conclusion.Internal_Name,
              event.sender.body.innerHTML
            );
          }}
          placeholder="Enter Conclusion"
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Ticket Type</Label>
        <Dropdown
          placeholder={"Select Ticket Type"}
          options={dropdownOptions(props.ticketDictionary.ticketType)}
          selectedKey={props.ticketType}
          onChange={(event: any, option: any) => {
            props.getSupportFieldValues(
              CONST.Lists.Tickets.Columns.Ticket_x0020_Type.Internal_Name,
              option.key
            );
          }}
        />
      </div>
      <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg9 ms-TextField">
        <br />
        <Checkbox
          name={CONST.Lists.Tickets.Columns.Training.Internal_Name}
          label={"Training candidate"}
          defaultChecked={props.training}
          onChange={(event: any, isChecked: boolean) => {
            props.getSupportFieldValues(
              CONST.Lists.Tickets.Columns.Training.Internal_Name,
              isChecked
            );
          }}
        />
      </div>
      <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg9 ms-TextField">
        <br />
        <Checkbox
          name={CONST.Lists.Tickets.Columns.FAQ.Internal_Name}
          label={"FAQ candidate"}
          defaultChecked={props.faq}
          onChange={(event: any, isChecked: boolean) => {
            props.getSupportFieldValues(
              CONST.Lists.Tickets.Columns.FAQ.Internal_Name,
              isChecked
            );
          }}
        />
      </div>
      <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg9 ms-TextField">
        <br />
        <Checkbox
          name={CONST.Lists.Tickets.Columns.Add_x0020_to_x0020_KB.Internal_Name}
          label={"Knowledge Base candidate"}
          defaultChecked={props.training}
          onChange={(event: any, isChecked: boolean) => {
            props.getSupportFieldValues(
              CONST.Lists.Tickets.Columns.Add_x0020_to_x0020_KB.Internal_Name,
              isChecked
            );
          }}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Labels</Label>
        <KatsTagPicker
          getValues={val => {
            props.getSupportFieldValues(
              CONST.Lists.Tickets.Columns.Label.Internal_Name,
              val
            );
          }}
          getOnBlur={() => {}}
          headerText="Suggested Labels"
          noResultText="No Label Found"
          placeholder={"Enter Label"}
          values={props.labels}
          options={tagPickerOptionGenerator(props.ticketDictionary.labels)}
        />
      </div>
    </div>
  );
};
