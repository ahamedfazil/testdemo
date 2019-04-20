import * as React from "react";
import { PeoplePicker } from "./PeoplePicker";
import { Label, TextField, Dropdown, DatePicker } from "office-ui-fabric-react";
import { CONST } from "../../utils/const";
import { ITicketDictionary } from "../../models/ITicketState";
import {
  dropdownOptions,
  getDateFromString,
  onFormatDate
} from "../../utils/Utilities";

interface IEngagementInfoProps {
  engagementName: string;
  sentinelGisId: number;
  engagementType: string[];
  periodEnd: string;
  chargeCode: string;
  getEngagementInfoValue: (key: string, value: any) => void;
  ticketDictionary: ITicketDictionary;
}

export const TicketEngagementInfo: React.SFC<IEngagementInfoProps> = (
  props
): JSX.Element => {
  return (
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Engagement Name</Label>
        <TextField
          onChange={text => {
            props.getEngagementInfoValue(
              CONST.Lists.Tickets.Columns.Engagement_x0020_Name.Internal_Name,
              text
            );
          }}
          value={props.engagementName}
          name={CONST.Lists.Tickets.Columns.Engagement_x0020_Name.Internal_Name}
          placeholder={"Enter Engagement name"}
          disabled={false}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Sentinel GIS ID</Label>
        <Dropdown
          placeholder={"Select Sentinel GIS ID"}
          options={dropdownOptions(props.ticketDictionary.sentinelGisId)}
          selectedKey={props.sentinelGisId}
          onChange={(key, option: any) => {
            props.getEngagementInfoValue(
              CONST.Lists.Tickets.Columns.Sentinel_x0020_GIS_x0020_ID
                .Internal_Name,
              option.key
            );
          }}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Engagement Type</Label>
        <Dropdown
          placeholder={"Select Engagement Type"}
          options={dropdownOptions(props.ticketDictionary.engagementType)}
          selectedKey={props.engagementType}
          onChange={(key, option: any) => {
            props.getEngagementInfoValue(
              CONST.Lists.Tickets.Columns.Engagement_x0020_Type.Internal_Name,
              option.key
            );
          }}
        />
      </div>
      <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg9 ms-TextField">
      <Label>Period End</Label>
        <DatePicker
          value={getDateFromString(props.periodEnd)}
          placeholder={"DD/MM/YYYY"}
          allowTextInput={true}
          onSelectDate={val => {
            CONST.Lists.Tickets.Columns.Accounting_x0020_Period_x0020_En =
              onFormatDate(val);
          }}
          formatDate={onFormatDate}
        />
      </div>
      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
        <Label>Charge Code</Label>
        <TextField
          onChange={text => {
            props.getEngagementInfoValue(CONST.Lists.Tickets.Columns.Engagement_x0020_Charge_x0020_Co.Internal_Name, text);
          }}
          value={props.chargeCode}
          name={CONST.Lists.Tickets.Columns.Engagement_x0020_Charge_x0020_Co.Internal_Name}
          placeholder={"Enter Charge Code"}
          disabled={false}
        />
      </div>
    </div>
  );
};
