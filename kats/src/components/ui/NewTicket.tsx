import {
  DefaultButton,
  Dropdown, IDropdown, IDropdownOption, BaseComponent,
  TextField
} from 'office-ui-fabric-react';
import { NewTicketProps } from '../containers/NewTicketProps';
import React from 'react';


export class NewTicket extends BaseComponent<NewTicketProps, {
  selectedItem?: { key: string | number | undefined };
  selectedItems: string[];
}>{




  private _basicDropdown = React.createRef<IDropdown>();

  constructor(props: {}) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selectedItems: []
    };
  }

  public render() {
    const { selectedItem, selectedItems } = this.state;
    return (
      <form>
        <section id = 'ticket'>
        <div className="content-wrap">
          <div className="col-one ms-TextField">

          
            <label className="ms-Label">Ticket ID</label>
            <input className="ms-TextField-field" type="text" placeholder="" />

            <label className="ms-Label">Engagement Name</label>
            <input className="ms-TextField-field" type="text" placeholder="" />

            <div className='ms-Dropdown-container root-47'>
              <Dropdown
                placeholder="Select options"
                label="Engagement Type:"
                selectedKeys={selectedItems}
                onChange={this.onChangeMultiSelect}
                onFocus={this._log('onFocus called')}
                onBlur={this._log('onBlur called')}
                multiSelect
                options={[
                  { key: 'A', text: 'EU PIE' },
                  { key: 'B', text: 'AQR' },
                  { key: 'C', text: 'Significant Other' },
                  { key: 'D', text: 'Other' },
                ]}
              />
            </div>

            <div className='ms-Dropdown-container root-47'>
              <Dropdown
                placeholder="Select options"
                label="Accounting Frameworks:"
                selectedKeys={selectedItems}
                onChange={this.onChangeMultiSelect}
                onFocus={this._log('onFocus called')}
                onBlur={this._log('onBlur called')}
                multiSelect
                options={[
                  { key: 'A', text: 'IFRS (EU)' },
                  { key: 'B', text: 'IFRS (IASB)' },
                  { key: 'C', text: 'FRS101' },
                  { key: 'D', text: 'FRS 102' },
                  { key: 'E', text: 'FRS 105' },
                  { key: 'F', text: 'US GAAP' },
                ]}
              />
            </div>

            <Dropdown
          label="Ticket Type:"
          selectedKey={selectedItem ? selectedItem.key : undefined}
          onChange={this.changeState}
          onFocus={this._log('onFocus called')}
          onBlur={this._log('onBlur called')}
          placeholder="Select an Option"
          options={[
            { key: 'A', text: 'General Query' },
            { key: 'B', text: 'Technical Advice' },
            { key: 'C', text: 'Formal Consultation' },
            { key: 'D', text: 'Mandatory Consultation' },
            { key: 'E', text: 'LFAR - mandatory review' },
            { key: 'F', text: 'PIR' }
          ]}
        />


            <label className="ms-Label">Subject</label>
            <input className="ms-TextField-field" type="text" placeholder="" />

            <TextField label="Detailed Analysis" multiline rows={10} />

            <TextField label="Conclusion" multiline rows={5} />

            



            <DefaultButton>
              Submit
          </DefaultButton>
          </div>
          <div className="col-two ms-TextField">
            <label className="ms-Label">Created</label>
            <input className="ms-TextField-field" type="text" placeholder="" />

            <label className="ms-Label">Priority</label>
            <input className="ms-TextField-field" type="text" placeholder="" />

          </div >

          <div className="col-three ms-TextField">
            <label className="ms-Label">Submitter</label>
            <input className="ms-TextField-field" type="text" placeholder="submitter name here..." />
          </div>

        </div>
        </section>
      </form>

    );
  }

  public changeState = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
    console.log('here are the things updating...' + item.key + ' ' + item.text + ' ' + item.selected);
    this.setState({ selectedItem: item });
  };

  public onChangeMultiSelect = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
    const updatedSelectedItem = this.state.selectedItems ? this.copyArray(this.state.selectedItems) : [];
    if (item.selected) {
      // add the option if it's checked
      updatedSelectedItem.push(item.key);
    } else {
      // remove the option if it's unchecked
      const currIndex = updatedSelectedItem.indexOf(item.key);
      if (currIndex > -1) {
        updatedSelectedItem.splice(currIndex, 1);
      }
    }
    this.setState({
      selectedItems: updatedSelectedItem
    });
  };

  public copyArray = (array: any[]): any[] => {
    const newArray: any[] = [];
    for (let i = 0; i < array.length; i++) {
      newArray[i] = array[i];
    }
    return newArray;
  };

  private _onSetFocusButtonClicked = (): void => {
    if (this._basicDropdown.current) {
      this._basicDropdown.current.focus(true);
    }
  };

  private _log(str: string): () => void {
    return (): void => {
      console.log(str);
    };
  }
}


// const newTicket = ({ticket={},onNewTicket=f=>f}) => {
//     //let ticket = new Ticket();

//     const submit = e => {
//         e.preventDefault()
//         ticket = new Ticket();
//         onNewTicket({



//         })

// }


//  }


export default NewTicket