import * as React from "react";
import { ITicketProps } from "../../models/ITicketProps";
import { debounce } from "throttle-debounce";
import { ITicketLocalState } from "../../models/ITicketState";
import { initialTicketLocalState } from "../../store/initialState";
import { getTicketDictionary } from "../../services/DictionaryAPI";
import { PeoplePicker } from "../support/PeoplePicker";

export class NewTicket extends React.Component<
  ITicketProps,
  ITicketLocalState
> {
  constructor(props: ITicketProps) {
    super(props);
    this.changedValue = debounce(300, this.changedValue);
    this.state = initialTicketLocalState;
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
    return (
      <div className="ms-Grid pad-left">
        Hii from new ticket
        <PeoplePicker
          getUserNames={person => {
            console.log(person);
          }}
          allowMulti={true}
          defaultPeople={null}
          disabled={false}
        />
      </div>
    );
  }
}
