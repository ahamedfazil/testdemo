import * as React from "react";
import { ITicketProps } from "../../models/ITicketProps";
import { debounce } from "throttle-debounce";
import { ITicketLocalState } from "../../models/ITicketState";
import { initialTicketLocalState } from "../../store/initialState";
import { getTicketDictionary } from "../../services/DictionaryAPI";
import { PeoplePicker } from "../support/PeoplePicker";
import update from "immutability-helper";

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
    return (
      <div className="ms-Grid pad-left">
        Hii from new ticket
        <PeoplePicker
          getUserNames={person => {
            console.log(person);
            update(this.state, {
              Submitted_x0020_ById:{$push: person}
            });
          }}
          allowMulti={true}
          defaultPeople={this.state.Submitted_x0020_ById}
          disabled={false}
        />
        {/* Dropdown */}
        {/* <Dropdown
                placeHolder={
                  "Select"
                }
                options={
                  projectState.projectData.organization === "GTP/GTA"
                    ? dropdownOptions(projectState.projectFields.GTPbrand)
                    : dropdownOptions(projectState.projectFields.BUSbrand)
                }
                selectedKey={projectState.projectData.brand}
                onChanged={(option: any) => {
                  this.props.updateProjectData(option.key, "brand");
                }}
                disabled={cannotEdit}
              /> */}
      </div>
    );
  }
}
