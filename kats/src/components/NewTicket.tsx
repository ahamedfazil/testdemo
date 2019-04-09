import PropTypes, { any } from 'prop-types';
import React from 'react';
import {
  DefaultButton,
  TextField,
  DatePicker,
  Checkbox, 
  NormalPeoplePicker, IPersonaProps,
  Dropdown, IDropdown, IDropdownOption,
  ComboBox, IComboBoxOption, IComboBox, Spinner, SpinnerSize, Fabric
} from 'office-ui-fabric-react';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { ICurrentTicketState } from '../models/ITicket';
import { IUserState } from '../models/IUser';
import { IAppProps } from '../models/IAppProps';
import pnp from '@pnp/pnpjs';
import { pnpConfig } from '../config/pnp.config';
import { getCurrentUser } from '../api/UserAPI';
import IStore from '../store/IStore';
import * as IActions from '../actions/IUserActions';
import { addTicket } from '../api/TicketAPI';
import { getDictionary } from '../api/DictionaryAPI';
import { IDictionaryState } from '../models/IDictionary';
import SupportFields from './SupportFields';



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

interface ITicketState {
  // fetchSubmitterInfo: () => Promise<IUser>;
  selectedItem?: { key: string | number | undefined };
  selectedItems?: string[];
  selectedOptionKeys?: string[];
  optionsMulti?: IComboBoxOption[];
  initialDisplayValueMulti?: string;
  delayResults?: boolean;
  //peopleList: IPersonaProps[];
  //mostRecentlyUsed: IPersonaProps[];
  currentSelectedItems?: IPersonaProps[];
  isPickerDisabled?: boolean;
}

export class NewTicket extends React.Component<IAppProps, ITicketState>
{


  constructor(props: IAppProps) {
    super(props);
    pnp.setup(pnpConfig);
    // getCurrentUser(props);
    getDictionary(props);
    addTicket(props)


  }

  componentWillMount() {
    initializeIcons(undefined, { disableWarnings: true });
  }

  private submit = e => {
    e.preventDefault()

  }

  // private _basicDropdown = React.createRef<IDropdown>();
  private _getTextFromItem(persona: IPersonaProps): string {
    return persona.text as string;
  }


  render(): JSX.Element {
    const userState: IUserState = this.props.store.user.userState;
    const store = this.props.store;
    const dictionaryStatus:IDictionaryState = this.props.store.status
    let ticket = this.props.store.ticket.currentTicket;
    return (
      <Fabric >
        <section>
          
          <div className="content-wrap">
          {!userState.isFetched ? (
                  <div>
                    {store.user.error ? (
                      <label>error = {'IUser Error ' + store.user.error}
                      </label>

                    ) : (
                        <Spinner size={SpinnerSize.small} />

                      )}
                  </div>
                 ) : (this.props.store.user.userState.id
                   )}
            <div className='ms-Grid-row'>
              <div className="col-one ms-TextField">
                <label className="ms-Label">Ticket ID</label>
                <input className="ms-TextField-field"
                  value={ticket.id}
                  type="text"
                  placeholder="" />
              </div>
              <div className="col-two ms-TextField">
                <label className="ms-Label">Created</label>
                <input className="ms-TextField-field" type="text" placeholder="" />
              </div>

              {!dictionaryStatus.isFetched ?
              store.status.error ? (
                    <label>error = {'Status list Error ' + store.status.error}
                    </label>
                    
                    ):(
                      <Spinner size={SpinnerSize.small} />
                      ):
                      

              <div className="col-three ms-TextField">
              <Dropdown
                  label="Status:"
                  selectedKey={ticket.status}
                  onChanged={this.onStatusChange}
                  placeholder="Select status"
                  options={store.status.results.map(x => {
                    return {
                      key: x.id,
                      text: x.title,
                    } as IDropdownOption;
                  })}
                /> 
             </div>
             }
            </div>
            <div className='ms-Grid-row'>
            <SupportFields/>

           </div>
            {/* <div className='ms-Grid-row'>
              <div className="col-one ms-TextField">
                <label className="ms-Label">Engagement Name</label>
                <input className="ms-TextField-field"
                  value={ticket.engagementName}
                  type="text"
                  placeholder="" />
              </div>
              <div className="col-two ms-TextField">
                <Dropdown
                  label="Priority:"
                  selectedKey={ticket.priority}
                  onChanged={this.onPriorityChange}
                  placeholder="Select an Option"
                  options={[
                    { key: 0, text: 'Normal' },
                    { key: 1, text: 'Urgent' },
                  ]}
                />
              </div >
              <div className="col-three ms-TextField">
                {!userState.isFetched ? (
                  <div>
                    {store.user.error ? (
                      <label>error = {'IUser Error ' + store.user.error}
                      </label>

                    ) : (
                        <Spinner size={SpinnerSize.small} />

                      )}
                  </div>
                 ) : (this.props.store.user.userState.id
                   )}
                <label className="ms-Label">Submitter</label>
                <NormalPeoplePicker
                  onResolveSuggestions={this.onFilterChanged}
                  className={'ms-PeoplePicker'}
                  key={this.props.store.user.userState.id}
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
                  selectedKeys={ticket.engagementType}
                  onChanged={this.onChangeMultiSelect}
                  multiSelect
                  options={store.engagementType.results.map(x => {
                    return {
                      key: x.id,
                      text: x.title,
                    } as IDropdownOption;
                  })}
                />
              </div>
              <div className='col-two ms-TextField'>
                <label className="ms-Label">Period End</label>
                <DatePicker isRequired={false} placeholder='Enter Date'
                  value={ticket.periodEnd}
                  onSelectDate={this.onPeriodEndDateChange} />
              </div>
              <div className="col-three ms-TextField">
                <label className="ms-Label">Assignee</label>
                <NormalPeoplePicker
                  onResolveSuggestions={this.onFilterChanged}
                  getTextFromItem={(persona: IPersonaProps) => persona.primaryText}
                  className={'ms-PeoplePicker'}
                  key={ticket.assignee}
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
                  selectedKeys={ticket.accountingFramework}
                  onChanged={this.onChangeMultiSelect}
                  multiSelect
                  options={store.accountingFramework.results.map(x => {
                    return {
                      key: x.id,
                      text: x.title,
                    } as IDropdownOption;
                  })}
                />
              </div>
              <div className='col-two ms-TextField'>
                <label className="ms-Label">Charge Code</label>
                <input className="ms-TextField-field"
                  value={ticket.engagementChargeCode}
                  type="text" placeholder="" />
              </div>
              <div className="col-three ms-TextField">
                <label className="ms-Label">Reviewer</label>
                <NormalPeoplePicker
                  onResolveSuggestions={this.onFilterChanged}
                  getTextFromItem={(persona: IPersonaProps) => persona.primaryText}
                  className={'ms-PeoplePicker'}
                  key={ticket.reviewer}
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
                  selectedKeys={ticket.auditingStandard}
                  onChanged={this.onChangeMultiSelect}
                  multiSelect
                  options={store.auditingStandard.results.map(x => {
                    return {
                      key: x.id,
                      text: x.title,
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
                  selectedKey={ticket.ticketType}
                  onChanged={this.onTicketTypeChange}
                  placeholder="Select an Option"
                  options={store.ticketType.results.map(x => {
                    return {
                      key: x.id,
                      text: x.title,
                    } as IDropdownOption;
                  })}
                />
              </div>
              <div className='ms-Dropdown-container root-47 col-two ms-TextField'>
                <Dropdown
                  label="Category:"
                  selectedKey={ticket.category}
                  onChanged={this.onCategoryChange}
                  placeholder="Select an Option"
                  options={store.category.results.map(x => {
                    return {
                      key: x.id,
                      text: x.title,
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
                  key={ticket.respIndividual}
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
                  value={ticket.subject}
                  type="text"
                  placeholder="" />
              </div>
              <div className='ms-Dropdown-container root-47 col-two ms-TextField'>
                <ComboBox
                  multiSelect
                  selectedKey={ticket.labels}
                  label="Topics:"
                  allowFreeform={true}
                  autoComplete="on"
                  onChange={this._onChangeMulti}
                  onResolveOptions={this._getOptionsMulti}
                  text={this.state.initialDisplayValueMulti}
                  options={store.topic.results.map(x => {
                    return {
                      key: x.id,
                      text: x.title,
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
                  value={ticket.conclusion}
                  multiline rows={5} />
              </div>
              <div className='col-three ms-TextField'>
                <ComboBox
                  multiSelect
                  selectedKey={ticket.labels}
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
                  value={ticket.addToKb} />
              </div>
              <div className='col-three ms-TextField'>
                <Checkbox label="Training flag"
                  onChange={this._onCheckboxChange}
                  value={ticket.training} />
              </div>
              <div className='col-three ms-TextField'>
                <Checkbox label="FAQ flag"
                  onChange={this._onCheckboxChange}
                  value={ticket.faq} />
              </div>
            </div>
            <div className='col-three'>
              <DefaultButton onClick={this.submit}>Save Ticket</DefaultButton>
            </div> */}
          </div>

        </section>
      </Fabric>

    );
  }

  public onStatusChange = (item: IDropdownOption): void => {
    this.props.store.ticket.currentTicket.status = item ? +item.key : undefined;
  }
  public onTicketTypeChange = (item: IDropdownOption): void => {
    this.props.store.ticket.currentTicket.ticketType = item ? +item.key : undefined;
  }
  public onCategoryChange = (item: IDropdownOption): void => {
    this.props.store.ticket.currentTicket.category = item ? +item.key : undefined;
  }
  private onPriorityChange: (item: IDropdownOption, index?: number) => void;

  public changeState = (item: IDropdownOption): void => {
    console.log('here are the things updating...' + item.key + ' ' + item.text + ' ' + item.selected);
    this.setState({ selectedItem: item });
  };

  public onChangeMultiSelect = (item: IDropdownOption): void => {
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

  // private _onSetFocusButtonClicked = (): void => {
  //   if (this._basicDropdown.current) {
  //     this._basicDropdown.current.focus(true);
  //   }
  // };

  private _log(str: string): () => void {
    return (): void => {
      console.log(str);
    };
  }
  private onPeriodEndDateChange(date: Date): void {
    this.props.store.ticket.currentTicket.periodEnd = date;
  }



  private searchPeople(terms): IPersonaProps[] | Promise<IPersonaProps[]> {
    return this.props.store.users
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
      // IUser selected/de-selected an existing option
      this.setState({
        selectedOptionKeys: this._updateSelectedOptionKeys(currentSelectedKeys, option)
      });
    } else if (value !== undefined) {
      // IUser typed a freeform option
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
