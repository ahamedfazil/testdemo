// import * as React from "react";
// import { ComboBox } from "@progress/kendo-react-dropdowns";
// import { filterBy } from "@progress/kendo-data-query";
// import pnp from "@pnp/pnpjs";
// import { autobind } from "@uifabric/utilities";

// interface IKendoComboProps {
//   getLabelValue: (value: string) => void;
//   textValue: string;
//   fetchList: string;
//   fetchColumn: string;
// }

// interface IKendoComboState {
//   fullValues: any[];
//   keyValue: any;
// }

// export class KendoCombo extends React.Component<
//   IKendoComboProps,
//   IKendoComboState
// > {
//   constructor(props: IKendoComboProps) {
//     super(props);
//     this.state = {
//       fullValues: [],
//       keyValue: this.props.textValue
//     };
//   }

//   async componentWillReceiveProps(newProps: IKendoComboProps) {
//     if (!newProps.textValue) {
//       console.log(
//         "TCL: componentWillReceiveProps -> newProps.textValue",
//         newProps.textValue
//       );
//       this.setState({ keyValue: "" });
//       await pnp.sp.web.lists
//         .getByTitle(this.props.fetchList)
//         .items.select(this.props.fetchColumn, "Id")
//         .top(5000)
//         .filter(
//           `substringof('${encodeURIComponent(newProps.textValue)}',Title)`
//         )
//         // .filter(`${this.props.fetchColumn} contains ${newProps.textValue}`)
//         .orderBy(this.props.fetchColumn)
//         .get()
//         .then((items: any[]) => {
//           console.log("TCL: componentWillReceiveProps -> items", items);
//           let choices = [];
//           for (const choice of items) {
//             choices.push({
//               key: choice.Id,
//               text: choice[this.props.fetchColumn]
//             });
//           }
//           this.setState({ fullValues: choices });
//         });
//     }
//   }

//   async componentDidMount() {
//     await pnp.sp.web.lists
//       .getByTitle(this.props.fetchList)
//       .items.select(this.props.fetchColumn, "Id")
//       .top(5000)
//       .orderBy(this.props.fetchColumn)
//       .get()
//       .then((items: any[]) => {
//         let choices = [];
//         for (const choice of items) {
//           choices.push({
//             key: choice.Id,
//             text: choice[this.props.fetchColumn]
//           });
//         }
//         this.setState({ fullValues: choices });
//         if (this.props.textValue) {
//           const textValue = this.props.textValue;
//           const defaultValue = choices.find(function(choice) {
//             return choice.text === textValue;
//           });
//           if (defaultValue) {
//             this.setState({
//               keyValue: defaultValue
//             });
//           } else {
//             this.setState({
//               keyValue: {
//                 key: 0,
//                 text: this.props.textValue
//               }
//             });
//           }
//         }
//       });
//   }

//   public render(): JSX.Element {
//     const options = {
//       data: this.state.fullValues,
//       textField: "text",
//       dataItemKey: "key"
//     };
//     return (
//       <div>
//         <ComboBox
//           value={this.state.keyValue}
//           {...options}
//           onChange={this._onItemsChange}
//           filterable={true}
//           onFilterChange={this.filterChange}
//         />
//       </div>
//     );
//   }

//   @autobind
//   private filterChange(event: any) {
//     this.setState({
//       keyValue: this.filterData(event.filter)
//     });
//   }

//   private filterData(filter: any) {
//     const allData = Object.assign(this.state.fullValues, {});
//     const data = allData.slice();
//     return filterBy(data, filter);
//   }

//   @autobind
//   private _onItemsChange(event: any) {
//     if (event.target.value && event.target.value.text) {
//       const value: string = event.target.value.text || null;
//       this.setState({ keyValue: event.target.value });
//       this.props.getLabelValue(value);
//     } else {
//       this.setState({ keyValue: event.target.value });
//       this.props.getLabelValue("");
//     }
//   }
// }
