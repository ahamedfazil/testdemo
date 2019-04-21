import * as React from "react";
import { PeoplePicker } from "./PeoplePicker";
import { Label, TextField, Dropdown } from "office-ui-fabric-react";
import { CONST } from "../../utils/const";
import { dropdownOptions } from "../../utils/Utilities";

interface ITicketRequestDetailProps {
  submitter: any[];
  isDisabled?: boolean;
  subject: string;
  detailedAnalysis: string;
  priority: string;
  getTicketRequestValue: (key: string, value: any | any[]) => void;
}
// export class TicketRequestDetail extends React.Component<
//   ITicketRequestDetailProps,
//   {}
// > {
//   constructor(props: ITicketRequestDetailProps) {
//     super(props);
//   }

//   public render(): JSX.Element {
//     return (
//       <div className="ms-Grid-row">
//         <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
//           <Label>Submitter</Label>
//           <PeoplePicker
//             getUserNames={person => {
//               this.props.getTicketRequestValue(
//                 CONST.Lists.Tickets.Columns.Submitted_x0020_ById.Internal_Name,
//                 person
//               );
//             }}
//             defaultPeople={this.props.submitter}
//             allowMulti={false}
//             disabled={this.props.isDisabled}
//             placeholder={"Provide Submitter"}
//           />
//         </div>
//         <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
//           <Label>Subject</Label>
//           <TextField
//             onChange={(event: any, value: string) => {
//               this.props.getTicketRequestValue(event.target.name, value);
//             }}
//             value={this.props.subject}
//             name={CONST.Lists.Tickets.Columns.Title.Internal_Name}
//             placeholder={"Title of the Ticket"}
//             disabled={false}
//           />
//         </div>
//         <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
//           <Label>Detail Analysis</Label>
//           <TextField
//             onChange={(event: any, value: string) => {
//               this.props.getTicketRequestValue(event.target.name, value);
//             }}
//             value={this.props.subject}
//             name={
//               CONST.Lists.Tickets.Columns.Detailed_x0020_Analysis.Internal_Name
//             }
//             placeholder={"Enter brief description"}
//             disabled={false}
//             multiline
//             rows={5}
//           />
//         </div>
//         <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
//           <Label>Priority</Label>
//           <Dropdown
//             placeholder={"Select Priority"}
//             options={dropdownOptions(["Normal", "Urgent"])}
//             selectedKey={this.props.priority}
//             onChange={(event: any, option: any) => {
//               this.props.getTicketRequestValue(
//                 CONST.Lists.Tickets.Columns.Priority.Internal_Name,
//                 option.key
//               );
//             }}
//           />
//         </div>
//       </div>
//     );
//   }
// }

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
        <TextField
          onChange={(event: any, value: string) => {
            props.getTicketRequestValue(event.target.name, value);
          }}
          value={props.detailedAnalysis}
          name={
            CONST.Lists.Tickets.Columns.Detailed_x0020_Analysis.Internal_Name
          }
          placeholder={"Enter brief description"}
          disabled={false}
          multiline
          rows={5}
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
    </div>
  )
);

// export const TicketRequestDetail: React.SFC<ITicketRequestDetailProps> = (
//   props
// ): JSX.Element => {
//   console.log("TCL: props.priority", props.priority);
//   return (
//     <div className="ms-Grid-row">
//       <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
//         <Label>Submitter</Label>
//         <PeoplePicker
//           getUserNames={person => {
//             props.getTicketRequestValue(
//               CONST.Lists.Tickets.Columns.Submitted_x0020_ById.Internal_Name,
//               person
//             );
//           }}
//           defaultPeople={props.submitter}
//           allowMulti={false}
//           disabled={props.isDisabled}
//           placeholder={"Provide Submitter"}
//         />
//       </div>
//       <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
//         <Label>Subject</Label>
//         <TextField
//           onChange={(event: any, value: string) => {
//             props.getTicketRequestValue(event.target.name, value);
//           }}
//           value={props.subject}
//           name={CONST.Lists.Tickets.Columns.Title.Internal_Name}
//           placeholder={"Title of the Ticket"}
//           disabled={false}
//         />
//       </div>
//       <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
//         <Label>Detail Analysis</Label>
//         <TextField
//           onChange={(event: any, value: string) => {
//             props.getTicketRequestValue(event.target.name, value);
//           }}
//           value={props.subject}
//           name={
//             CONST.Lists.Tickets.Columns.Detailed_x0020_Analysis.Internal_Name
//           }
//           placeholder={"Enter brief description"}
//           disabled={false}
//           multiline
//           rows={5}
//         />
//       </div>
//       <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg9">
//         <Label>Priority</Label>
//         <Dropdown
//           placeholder={"Select Priority"}
//           options={dropdownOptions(["Normal", "Urgent"])}
//           selectedKey={props.priority}
//           onChange={(event: any, option: any) => {
//             props.getTicketRequestValue(
//               CONST.Lists.Tickets.Columns.Priority.Internal_Name,
//               option.key
//             );
//           }}
//         />
//       </div>
//     </div>
//   );
// };
