import * as React from "react";
import { ComboBox } from "@progress/kendo-dropdowns-react-wrapper";
import pnp from "@pnp/pnpjs";
import { autobind } from "@uifabric/utilities";
import "./KendoCombo.scss";

interface IKendoComboProps {
  getLabelValue: (value: string) => void;
  fullValues?: any[];
  isRemote?: boolean;
  textValue: string;
  fetchList?: string;
  fetchColumn?: string;
}

interface IKendoComboState {
  fullValues: any[];
  keyValue: any;
}

export class KendoCombo extends React.Component<
  IKendoComboProps,
  IKendoComboState
> {
  constructor(props: IKendoComboProps) {
    super(props);
    this.state = {
      fullValues: [],
      keyValue: this.props.textValue
    };
  }

  async componentDidMount() {
    if (this.props.isRemote) {
      await pnp.sp.web.lists
        .getByTitle(this.props.fetchList)
        .items.select(this.props.fetchColumn, "Id")
        .top(5000)
        .orderBy(this.props.fetchColumn)
        .get()
        .then((items: any[]) => {
          let choices = [];
          for (const choice of items) {
            choices.push({
              key: choice.Id,
              text: choice[this.props.fetchColumn]
            });
          }
          this.setState({ fullValues: choices });
        });
    }
  }

  public render(): JSX.Element {
    const options = {
      dataSource: this.props.isRemote
        ? this.state.fullValues
        : this.props.fullValues,
      dataTextField: "text",
      dataValueField: "key",
      filter: "contains"
    };
    return (
      <div>
        <ComboBox
          value={this.state.keyValue}
          {...options}
          change={this._onItemsChange}
        />
      </div>
    );
  }

  @autobind
  private _onItemsChange(event: any) {
    const value: string = event.sender._prev;
    this.setState({ keyValue: value });
    this.props.getLabelValue(value);
  }
}
