import * as React from "react";
import { ITicketProps } from "../../models/ITicketProps";
import { debounce } from "throttle-debounce";
import {
  ITicketLocalState,
  ITicketDictionary
} from "../../models/ITicketState";
import { initialTicketLocalState } from "../../store/initialState";
import { getTicketDictionary } from "../../services/DictionaryAPI";
import { PeoplePicker } from "../support/PeoplePicker";
import { Dropdown } from "office-ui-fabric-react/lib/Dropdown";
import { dropdownOptions } from "../../utils/Utilities";

export class NewTicket extends React.Component<
  ITicketProps,
  ITicketLocalState
> {
  constructor(props: ITicketProps) {
    super(props);
    this.changedValue = debounce(300, this.changedValue);
    this.state = initialTicketLocalState(this.props.store);
  }
  onChangeHandler(key: string, value: any) {
    this.changedValue(key, value);
  }

  changedValue(key: string, value: any) {
    // this.props.updateTicketData(value, key);
  }

  async componentDidMount() {
    await getTicketDictionary(this.props);
  }

  public render(): JSX.Element {
    const ticketDictionary: ITicketDictionary = this.props.store.ticket
      .ticketDictionary;
    return (
      <div className="ms-Grid pad-left">
        Hii from new ticket
        <PeoplePicker
          getUserNames={person => {
            this.setState({
              Submitted_x0020_ById: person
            });
          }}
          allowMulti={true}
          defaultPeople={this.state.Submitted_x0020_ById}
          disabled={false}
        />
        {/* Dropdown */}
        <Dropdown
          placeholder={"Select"}
          options={dropdownOptions(ticketDictionary.accountingFramework)}
          selectedKey={this.state.Accounting_x0020_Framework}
          onChange={(option: any, event: any) => {
            this.setState({
              Accounting_x0020_Framework: event.key
            });
          }}
        />
      </div>
    );
  }
}
