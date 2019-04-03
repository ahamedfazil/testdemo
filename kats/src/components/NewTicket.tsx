import PropTypes, { any } from 'prop-types';
import React from 'react';
import {
  DefaultButton,
  TextField,
  DatePicker,
  Checkbox,
  NormalPeoplePicker,IPersonaProps,
  Dropdown, IDropdown, IDropdownOption,
  ComboBox,IComboBoxOption,IComboBox,
} from 'office-ui-fabric-react';

import { Ticket } from '../models/Ticket';
import { User } from '../models/User';
import { DictionaryItem } from '../models/DictionaryItem';


const INITIAL_OPTIONS: IComboBoxOption[] = [
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
  { key: 'D', text: 'Option D' },
  { key: 'E', text: 'Option E' },
  { key: 'F', text: 'Option F' },
  { key: 'G', text: 'Option G' },
  { key: 'H', text: 'Option H' },
  { key: 'I', text: 'Option I' },
  { key: 'J', text: 'Option J' }
];

interface TicketState {

  fetchSubmitterInfo: () => Promise<User>;
  selectedItem?: { key: string | number | undefined };
  selectedItems: string[],
  selectedOptionKeys?: string[];
  optionsMulti: IComboBoxOption[];
  initialDisplayValueMulti?: string;
  delayResults?: boolean;
  //peopleList: IPersonaProps[];
  //mostRecentlyUsed: IPersonaProps[];
  currentSelectedItems?: IPersonaProps[];
  isPickerDisabled?: boolean;

}

export interface TicketProps {
  onNewTicket,
  engagementType: any[],
  accountingFramework: any[],
  auditingStandard: any[],
  category: any[],
  topic: any[],
  ticketType: any[],
  status: any[],
  users: User[]
}

// export interface ITicketProps{
//   getAllEngagementTypes:DictionaryItem[],
//   getAllAccountingFrameworks:DictionaryItem[],
//   getAllAuditingStandards:DictionaryItem[],
//   getAllCategories:DictionaryItem[],
//   getAllTopicss:DictionaryItem[],
//   getAllTicketTypes:DictionaryItem[],
//   getAllStatuses:DictionaryItem[],
//   onNewTicket,

// }

export class NewTicket extends React.Component<TicketProps, TicketState>
{
_ticket:Ticket = this._ticket;
 
 public static defaultProps = {
    users: [],
    accountingFramework:[],
    engagementType:[],
    auditingStandard:[],
    category:[],
    ticketType:[],
    status:[],
    topic:[],
    onNewTicket:any,
      };
  


// constructor(props: TicketProps) {
//   super(props);
  
//   }
private submit = e => {
  e.preventDefault()
  this.props.onNewTicket({
    ticket:this._ticket
  })
}

componentDidMount() {
  this.props.onNewTicket
}


  private _basicDropdown = React.createRef<IDropdown>();
  private _getTextFromItem(persona: IPersonaProps): string {
    return persona.text as string;
  }


  render() { // : React.ReactElement<TicketProps>
    return (
    <form >
        <section>
          <div className="content-wrap">
            <div className='ms-Grid-row'>
              <div className="col-one ms-TextField">
                <label className="ms-Label">Ticket ID</label>
                <input className="ms-TextField-field"
                  value={this._ticket.id}
                  type="text"
                  placeholder="" />
              </div>
              <div className="col-two ms-TextField">
                <label className="ms-Label">Created</label>
                <input className="ms-TextField-field" type="text" placeholder="" />
              </div>
              <div className="col-three ms-TextField">
                <Dropdown
                  label="Status:"
                  selectedKey={this._ticket.status}
                  onChange={this.onStatusChange}
                  placeholder="Select an Option"
                  options={this.props.status.map(x => {
                    return {
                      key: x.Id,
                      text: x.Title,
                    } as IDropdownOption;
                  })}
                />
              </div>
            </div>
            <div className='ms-Grid-row'>
              <div className="col-one ms-TextField">
                <label className="ms-Label">Engagement Name</label>
                <input className="ms-TextField-field"
                  value={this._ticket.engagementName}
                  type="text"
                  placeholder="" />
              </div>
              <div className="col-two ms-TextField">
                <Dropdown
                  label="Priority:"
                  selectedKey={this._ticket.priority}
                  onChange={this.changeState}
                  placeholder="Select an Option"
                  options={[
                    { key: 0, text: 'Normal' },
                    { key: 1, text: 'Urgent' },
                  ]}
                />
              </div >
              <div className="col-three ms-TextField">
                <label className="ms-Label">Submitter</label>
                <NormalPeoplePicker
                  onResolveSuggestions={this.onFilterChanged}
                  className={'ms-PeoplePicker'}
                  key={this._ticket.submitterId}
                  itemLimit={1}
                  pickerSuggestionsProps={{
                    noResultsFoundText: 'No results found',
                    loadingText: 'Loading...'
                  }}
                />
              </div>
            </div>
            <div className='ms-Grid-row'>
              <div className='ms-Dropdown-container root-47 col-one ms-TextField'>
                <Dropdown
                  placeholder="Select options"
                  label="Engagement Types:"
                  selectedKeys={this._ticket.engagementType}
                  onChange={this.onChangeMultiSelect}
                  multiSelect
                  options={this.props.engagementType.map(x => {
                    return {
                      key: x.Id,
                      text: x.Title,
                    } as IDropdownOption;
                  })}
                />
              </div>
              <div className='col-two ms-TextField'>
                <label className="ms-Label">Period End</label>
                <DatePicker isRequired={false} placeholder='Enter Date'
                  value={this._ticket.periodEnd}
                  onSelectDate={this.onPeriodEndDateChange} />
              </div>
              <div className="col-three ms-TextField">
                <label className="ms-Label">Assignee</label>
                <NormalPeoplePicker
                  onResolveSuggestions={this.onFilterChanged}
                  getTextFromItem={(persona: IPersonaProps) => persona.primaryText}
                  className={'ms-PeoplePicker'}
                  key={this._ticket.assignee}
                  itemLimit={1}
                  // selectedItems={this._ticket.assignee}
                  pickerSuggestionsProps={{
                    noResultsFoundText: 'No results found',
                    loadingText: 'Loading...'
                  }}
                />
              </div>
            </div>
            <div className='ms-Grid-row'>
              <div className='ms-Dropdown-container root-47 col-one ms-TextField'>
                <Dropdown
                  placeholder="Select options"
                  label="Accounting Frameworks:"
                  selectedKeys={this._ticket.accountingFramework}
                  onChange={this.onChangeMultiSelect}
                  multiSelect
                  options={this.props.accountingFramework.map(x => {
                    return {
                      key: x.Id,
                      text: x.Title,
                    } as IDropdownOption;
                  })}
                />
              </div>
              <div className='col-two ms-TextField'>
                <label className="ms-Label">Charge Code</label>
                <input className="ms-TextField-field"
                  value={this._ticket.engagementChargeCode}
                  type="text" placeholder="" />
              </div>
              <div className="col-three ms-TextField">
                <label className="ms-Label">Reviewer</label>
                <NormalPeoplePicker
                  onResolveSuggestions={this.onFilterChanged}
                  getTextFromItem={(persona: IPersonaProps) => persona.primaryText}
                  className={'ms-PeoplePicker'}
                  key={this._ticket.reviewer}
                  itemLimit={1}
                  // selectedItems={this._ticket.reviewer}
                  pickerSuggestionsProps={{
                    noResultsFoundText: 'No results found',
                    loadingText: 'Loading...'
                  }}
                />
              </div>
            </div>
            <div className='ms-Grid-row'>
              <div className='ms-Dropdown-container root-47 col-one ms-TextField'>
                <Dropdown
                  placeholder="Select options"
                  label="Auditing Standards:"
                  selectedKeys={this._ticket.auditingStandard}
                  onChange={this.onChangeMultiSelect}
                  multiSelect
                  options={this.props.auditingStandard.map(x => {
                    return {
                      key: x.Id,
                      text: x.Title,
                    } as IDropdownOption;
                  })}
                />
              </div>
              <div className='col-two ms-TextField'>
                <label className="ms-Label">Support Team</label>
                <input className="ms-TextField-field" type="text" placeholder="" />
              </div>
              <div className="col-three ms-TextField">
                <label className="ms-Label">Audit Team</label>
                <NormalPeoplePicker
                  onResolveSuggestions={this.onFilterChanged}
                  getTextFromItem={(persona: IPersonaProps) => persona.primaryText}
                  className={'ms-PeoplePicker'}
                  key={'normal'}
                  itemLimit={1}
                  // selectedItems={this._ticket.auditTeam}
                  pickerSuggestionsProps={{
                    noResultsFoundText: 'No results found',
                    loadingText: 'Loading...'
                  }}
                />
              </div>
            </div>
            <div className='ms-Grid-row'>
              <div className='ms-Dropdown-container root-47 col-one ms-TextField'>
                <Dropdown
                  label="Ticket Type:"
                  selectedKey={this._ticket.ticketType}
                  onChange={this.onTicketTypeChange}
                  placeholder="Select an Option"
                  options={this.props.ticketType.map(x => {
                    return {
                      key: x.Id,
                      text: x.Title,
                    } as IDropdownOption;
                  })}
                />
              </div>
              <div className='ms-Dropdown-container root-47 col-two ms-TextField'>
                <Dropdown
                  label="Category:"
                  selectedKey={this._ticket.category}
                  onChange={this.onCategoryChange}
                  placeholder="Select an Option"
                  options={this.props.category.map(x => {
                    return {
                      key: x.Id,
                      text: x.Title,
                    } as IDropdownOption;
                  })}
                />
              </div>
              <div className="col-three ms-TextField">
                <label className="ms-Label">Engagement RI</label>
                <NormalPeoplePicker
                  onResolveSuggestions={this.onFilterChanged}
                  getTextFromItem={(persona: IPersonaProps) => persona.primaryText}
                  className={'ms-PeoplePicker'}
                  key={this._ticket.respIndividual}
                  itemLimit={1}
                  // selectedItems={this._ticket.respIndividual}
                  pickerSuggestionsProps={{
                    noResultsFoundText: 'No results found',
                    loadingText: 'Loading...'
                  }}
                />
              </div>
            </div>
            <div className='ms-Grid-row'>
              <div className='col-one ms-TextField'>
                <label className="ms-Label">Subject</label>
                <input className="ms-TextField-field"
                  value={this._ticket.subject}
                  type="text"
                  placeholder="" />
              </div>
              <div className='ms-Dropdown-container root-47 col-two ms-TextField'>
                <ComboBox
                  multiSelect
                  selectedKey={this._ticket.label}
                  label="Topics:"
                  allowFreeform={true}
                  autoComplete="on"
                  onChange={this._onChangeMulti}
                  onResolveOptions={this._getOptionsMulti}
                  text={this.state.initialDisplayValueMulti}
                  options={this.props.topic.map(x => {
                    return {
                      key: x.Id,
                      text: x.Title,
                    } as IComboBoxOption;
                  })}
                />
              </div>
              <div className="col-three ms-TextField">
                <label className="ms-Label">Watchers</label>
                <NormalPeoplePicker
                  onResolveSuggestions={this.onFilterChanged}
                  getTextFromItem={(persona: IPersonaProps) => persona.primaryText}
                  className={'ms-PeoplePicker'}
                  key={'normal'}
                  itemLimit={1}
                  // selectedItems={this._ticket.watcher}
                  pickerSuggestionsProps={{
                    noResultsFoundText: 'No results found',
                    loadingText: 'Loading...'
                  }}
                />
              </div>
            </div>
            <div className='ms-Grid-row'>
              <div className='col-wide ms-TextField'>
                <TextField label="Detailed Analysis" multiline rows={10} />
              </div>
              <div className='col-three ms-TextField'>
                <label className="ms-Label">Topic Leads</label>
                <input className="ms-TextField-field" type="text" placeholder="" />
              </div>
            </div>
            <div className='ms-Grid-row'>
              <div className='col-wide ms-TextField'>
                <TextField label="Conclusion"
                  value={this._ticket.conclusion}
                  multiline rows={5} />
              </div>
              <div className='col-three ms-TextField'>
                <ComboBox
                  multiSelect
                  selectedKey={this._ticket.label}
                  label="Labels"
                  allowFreeform={true}
                  autoComplete="on"
                  options={this.state.optionsMulti}
                  onChange={this._onChangeMulti}
                  text={this.state.initialDisplayValueMulti}
                />
              </div>
            </div>
            <div className='ms-Grid-row'>
              <div className='col-three ms-TextField'>
                <Checkbox label="Knowledge Base candidate"
                  onChange={this._onCheckboxChange}
                  value={this._ticket.addToKb} />
              </div>
              <div className='col-three ms-TextField'>
                <Checkbox label="Training flag"
                  onChange={this._onCheckboxChange}
                  value={this._ticket.training} />
              </div>
              <div className='col-three ms-TextField'>
                <Checkbox label="FAQ flag"
                  onChange={this._onCheckboxChange}
                  value={this._ticket.faq} />
              </div>
            </div>
            <div className='col-three'>
              <DefaultButton onClick={this.submit}>Save Ticket</DefaultButton>
            </div>
          </div>

        </section>
      </form>

    );
  }
  
  public onStatusChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
    this._ticket.status = item ? +item.key : undefined;
  }
  public onTicketTypeChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
    this._ticket.ticketType = item ? +item.key : undefined;
  }
  public onCategoryChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
    this._ticket.category = item ? +item.key : undefined;
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
  private onPeriodEndDateChange(date: Date): void {
    this._ticket.periodEnd = date;
  }



  private searchPeople(terms): IPersonaProps[] | Promise<IPersonaProps[]> {
    return this.props.users
      .filter(x => x.userState.name.toLocaleLowerCase().indexOf(terms.toLocaleLowerCase()) > -1)
      .map(x => {
        return {
          id: x.userState.id.toString(),
          primaryText: x.userState.name,
          secondaryText: x.userState.id
        } as unknown as IPersonaProps;
      });
  }

  private onFilterChanged(filterText: string) {
    if (filterText) {
      if (filterText.length > 2) {
        return this.searchPeople(filterText);
      }
    } else {
      return [];
    }
    return [];
  }

  private _onCheckboxChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean): void {
    console.log(`The option has been changed to ${isChecked}.`);
  }

  private _getOptionsMulti = (currentOptions: IComboBoxOption[]): IComboBoxOption[] => {
    if (this.state.optionsMulti.length > 0) {
      return this.state.optionsMulti;
    }

    const options = [...INITIAL_OPTIONS];

    this.setState({
      optionsMulti: options,
      selectedOptionKeys: ['C', 'D'],
      initialDisplayValueMulti: undefined
    });

    return options;
  };



  private _onChangeMulti = (event: React.FormEvent<IComboBox>, option?: IComboBoxOption, index?: number, value?: string) => {
    console.log('_onChangeMulti() is called: option = ' + JSON.stringify(option));
    const currentSelectedKeys = this.state.selectedOptionKeys || [];
    if (option) {
      // User selected/de-selected an existing option
      this.setState({
        selectedOptionKeys: this._updateSelectedOptionKeys(currentSelectedKeys, option)
      });
    } else if (value !== undefined) {
      // User typed a freeform option
      const newOption: IComboBoxOption = { key: value, text: value };
      const updatedSelectedKeys: string[] = [...currentSelectedKeys, newOption.key as string];
      this.setState({
        optionsMulti: [...this.state.optionsMulti, newOption],
        selectedOptionKeys: updatedSelectedKeys
      });
    }
  };

  private _updateSelectedOptionKeys = (selectedKeys: string[], option: IComboBoxOption): string[] => {
    selectedKeys = [...selectedKeys]; // modify a copy
    const index = selectedKeys.indexOf(option.key as string);
    if (option.selected && index < 0) {
      selectedKeys.push(option.key as string);
    } else {
      selectedKeys.splice(index, 1);
    }
    return selectedKeys;
  };

}

// NewTicket.propT = {

// }


export default NewTicket
