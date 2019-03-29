import {
  DefaultButton,
  Dropdown, IDropdown, IDropdownOption,
  TextField,
  DatePicker,
  NormalPeoplePicker,
  IPersonaProps,
  Checkbox,
  ComboBox,
  IComboBoxOption,
  IComboBox,
  BaseComponent
} from 'office-ui-fabric-react';
import PropTypes from 'prop-types';
import React from 'react';
import { Ticket } from '../models/Ticket';
import { User } from '../models/User';


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

interface NewTicketProps {
      users: User[];
      ticket: Ticket;
      fetchSubmitterInfo: () => Promise<User>;
      selectedItem: null,
      selectedItems: [],
      selectedOptionKeys: [],
      optionsMulti: [],
      initialDisplayValueMulti: '',

}


export class NewTicket extends React.Component<any,
  {
    selectedItem?: { key: string | number | undefined};
    selectedItems: string[],
    selectedOptionKeys?: string[];
    optionsMulti: IComboBoxOption[];
    initialDisplayValueMulti?: string;
    
  
  //People Picker 
  
  delayResults?: boolean;
  //peopleList: IPersonaProps[];
  //mostRecentlyUsed: IPersonaProps[];
  currentSelectedItems?: IPersonaProps[];
  isPickerDisabled?: boolean;
  }>
{


  static propTypes = {
    fetchSubmitterInfo: PropTypes.func.isRequired,
    users: PropTypes.arrayOf(
      PropTypes.instanceOf(User).isRequired,
       ),
    // ticket: PropTypes.arrayOf(
    //   PropTypes.instanceOf(Ticket).isRequired
   // )  
  }

  public static defaultProps = {
    users: []
   
  }
  _ticket: Ticket = this._ticket;
 
  
  private _basicDropdown = React.createRef<IDropdown>();
  private _getTextFromItem(persona: IPersonaProps): string {
        return persona.text as string;
      }


  constructor(props: {}) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selectedItems: [],
      selectedOptionKeys: [],
      optionsMulti: [],
      initialDisplayValueMulti: '',
      //People Picker states
      delayResults: false,
      //peopleList: people,
      // mostRecentlyUsed: mru,
      currentSelectedItems: [],
      isPickerDisabled: false
    };
  }


  public render():React.ReactElement<any> {
    const { selectedItem } = this.state;

   
    return (

     

      <form >
        <section id='ticket'>
          <div className="content-wrap">

            <div className = 'ms-Grid-row'>
            <div className="col-one ms-TextField">
              <label className="ms-Label">Ticket ID</label>
              <input className="ms-TextField-field" type="text" placeholder="" />
            </div>

            <div className="col-two ms-TextField">
              <label className="ms-Label">Created</label>
              <input className="ms-TextField-field" type="text" placeholder="" />
            </div>

            <div className="col-three ms-TextField">
              <Dropdown
                label="Status:"
                selectedKey={selectedItem ? selectedItem.key : undefined}
                onChange={this.changeState}
                onFocus={this._log('onFocus called')}
                onBlur={this._log('onBlur called')}
                placeholder="Select an Option"
                options={[
                  { key: 'unassigned', text: 'Unassigned' },
                  { key: 'inprogress', text: 'In Progress' },
                  { key: 'pendinginput', text: 'Pending Audit Team Input' },
                  { key: 'completed', text: 'Completed' },
                  { key: 'cancelled', text: 'Cancelled' },
                  { key: 'review', text: 'Under Review' }

                ]}
              />
            </div>
            </div>
            <div className = 'ms-Grid-row'>
            <div className="col-one ms-TextField">
              <label className="ms-Label">Engagement Name</label>
              <input className="ms-TextField-field" type="text" placeholder="" />
            </div>

            <div className="col-two ms-TextField">
              <Dropdown
                label="Priority:"
                selectedKey={selectedItem ? selectedItem.key : undefined}
                onChange={this.changeState}
                onFocus={this._log('onFocus called')}
                onBlur={this._log('onBlur called')}
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
                getTextFromItem={this._getTextFromItem}
                className={'ms-PeoplePicker'}
                key={'normal'}
                itemLimit={1}
                pickerSuggestionsProps={{
                  noResultsFoundText: 'No results found',
                  loadingText: 'Loading...'
                }}
              />
            </div>
            </div>
            <div className = 'ms-Grid-row'>

            <div className='ms-Dropdown-container root-47 col-one ms-TextField'>
              <Dropdown
                placeholder="Select options"
                label="Engagement Type:"
                selectedKeys={undefined}
                onChange={this.onChangeMultiSelect}
                onFocus={this._log('onFocus called')}
                onBlur={this._log('onBlur called')}
                multiSelect
                options={[
                  { key: 'eupie', text: 'EU PIE' },
                  { key: 'aqr', text: 'AQR' },
                  { key: 'significant', text: 'Significant Other' },
                  { key: 'other', text: 'Other' },
                ]}
              />
            </div>

            <div className='col-two ms-TextField'>
              <label className="ms-Label">Period End</label>
              <DatePicker isRequired={false} placeholder='Enter Date'
                value={undefined}
                onSelectDate={this.onPeriodEndDateChange} />
            </div>

            <div className="col-three ms-TextField">
              <label className="ms-Label">Assignee</label>
              <NormalPeoplePicker
                onResolveSuggestions={this.onFilterChanged}
                getTextFromItem={(persona: IPersonaProps) => persona.primaryText}
                className={'ms-PeoplePicker'}
                key={'normal'}
                itemLimit={1}
                // selectedItems={this._ticket.assignee}
                pickerSuggestionsProps={{
                  noResultsFoundText: 'No results found',
                  loadingText: 'Loading...'
                }}
              />
            </div>
            </div>

            <div className = 'ms-Grid-row'>
            <div className='ms-Dropdown-container root-47 col-one ms-TextField'>
              <Dropdown
                placeholder="Select options"
                label="Accounting Frameworks:"
                selectedKeys={undefined}
                onChange={this.onChangeMultiSelect}
                onFocus={this._log('onFocus called')}
                onBlur={this._log('onBlur called')}
                multiSelect
                options={[
                  { key: 'ifrseu', text: 'IFRS (EU)' },
                  { key: 'ifrsiasb', text: 'IFRS (IASB)' },
                  { key: 'frs101', text: 'FRS101' },
                  { key: 'frs102', text: 'FRS 102' },
                  { key: 'frs105', text: 'FRS 105' },
                  { key: 'usgaap', text: 'US GAAP' },
                ]}
              />
            </div>

            <div className='col-two ms-TextField'>
              <label className="ms-Label">Charge Code</label>
              <input className="ms-TextField-field" type="text" placeholder="" />
            </div>

            <div className="col-three ms-TextField">
              <label className="ms-Label">Reviewer</label>
              <NormalPeoplePicker
                onResolveSuggestions={this.onFilterChanged}
                getTextFromItem={(persona: IPersonaProps) => persona.primaryText}
                className={'ms-PeoplePicker'}
                key={'normal'}
                itemLimit={1}
                // selectedItems={this._ticket.reviewer}
                pickerSuggestionsProps={{
                  noResultsFoundText: 'No results found',
                  loadingText: 'Loading...'
                }}
              />
            </div>
            </div>

            <div className = 'ms-Grid-row'>
            <div className='ms-Dropdown-container root-47 col-one ms-TextField'>
              <Dropdown
                placeholder="Select options"
                label="Auditing Standards:"
                selectedKeys={undefined}
                onChange={this.onChangeMultiSelect}
                onFocus={this._log('onFocus called')}
                onBlur={this._log('onBlur called')}
                multiSelect
                options={[
                  { key: 'isasuk', text: 'ISAs (UK)' },
                  { key: 'isreuki', text: 'ISRE (UK&I)' },
                  { key: 'isrs4400', text: 'ISRS 4400' },
                  { key: 'isae3000', text: 'ISAE 3000' },
                  { key: 'pcaob', text: 'PCAOB' },
                  { key: 'aicpa', text: 'AICPA' },
                ]}
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

            <div className = 'ms-Grid-row'>
            <div className='ms-Dropdown-container root-47 col-one ms-TextField'>
              <Dropdown
                label="Ticket Type:"
                selectedKey={selectedItem ? selectedItem.key : undefined}
                onChange={this.changeState}
                onFocus={this._log('onFocus called')}
                onBlur={this._log('onBlur called')}
                placeholder="Select an Option"
                options={[
                  { key: 'gq', text: 'General Query' },
                  { key: 'ta', text: 'Technical Advice' },
                  { key: 'fc', text: 'Formal Consultation' },
                  { key: 'mc', text: 'Mandatory Consultation' },
                  { key: 'lm', text: 'LFAR - mandatory review' },
                  { key: 'pi', text: 'PIR' }
                ]}
              />
            </div>

            <div className='ms-Dropdown-container root-47 col-two ms-TextField'>
              <Dropdown
                label="Category:"
                selectedKey={selectedItem ? selectedItem.key : undefined}
                onChange={this.changeState}
                onFocus={this._log('onFocus called')}
                onBlur={this._log('onBlur called')}
                placeholder="Select an Option"
                options={[
                  { key: 'anrep', text: 'Annual report – front end (APMs, strategic report, corporate governance)' },
                  { key: 'inrep', text: 'Interim report' },
                  { key: 'focon', text: 'Formal Consultation' },
                  { key: 'ukcom', text: 'UK Company Law' },
                  { key: 'aurep', text: 'Audit reports and other reporting' },
                  { key: 'prper', text: 'Prior period restatements and revised accounts' }
                ]}
              />
            </div>

            <div className="col-three ms-TextField">
              <label className="ms-Label">Engagement RI</label>
              <NormalPeoplePicker
                onResolveSuggestions={this.onFilterChanged}
                getTextFromItem={(persona: IPersonaProps) => persona.primaryText}
                className={'ms-PeoplePicker'}
                key={'normal'}
                itemLimit={1}
                // selectedItems={this._ticket.respIndividual}
                pickerSuggestionsProps={{
                  noResultsFoundText: 'No results found',
                  loadingText: 'Loading...'
                }}
              />
            </div>
            </div>

            <div className = 'ms-Grid-row'>
            <div className='col-one ms-TextField'>
              <label className="ms-Label">Subject</label>
              <input className="ms-TextField-field" type="text" placeholder="" />
            </div>

            <div className='ms-Dropdown-container root-47 col-two ms-TextField'>
              <Dropdown
                label="Topics:"
                selectedKey={selectedItem ? selectedItem.key : undefined}
                onChange={this.changeState}
                onFocus={this._log('onFocus called')}
                onBlur={this._log('onBlur called')}
                placeholder="Select an Option"
                options={[
                  { key: 'cash', text: 'Cash flow statement' },
                  { key: 'foreign', text: 'Foreign currency' },
                  { key: 'revenue', text: 'Revenue' },
                  { key: 'joint', text: 'Joint arrangements' },
                  { key: 'distributions', text: 'Distributions' },
                  { key: 'materiality', text: 'Materiality - other' }
                ]}
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

            <div className = 'ms-Grid-row'>
            <div className='col-wide ms-TextField'>
              <TextField label="Detailed Analysis" multiline rows={10} />
            </div>

            <div className='col-three ms-TextField'>
              <label className="ms-Label">Topic Leads</label>
              <input className="ms-TextField-field" type="text" placeholder="" />
            </div>
            </div>

            <div className = 'ms-Grid-row'>
            <div className='col-wide ms-TextField'>
              <TextField label="Conclusion" multiline rows={5} />
            </div>
            
            <div className='col-three ms-TextField'>
              <ComboBox
                multiSelect
                selectedKey={this.state.selectedOptionKeys}
                label="Labels"
                allowFreeform={true}
                autoComplete="on"
                options={this.state.optionsMulti}
                onChange={this._onChangeMulti}
                onResolveOptions={this._getOptionsMulti}
                text={this.state.initialDisplayValueMulti}
              />
            </div>
            </div>

            <div className = 'ms-Grid-row'>

            <div className='col-three ms-TextField'>
              <Checkbox label="Knowledge Base candidate" onChange={this._onCheckboxChange} />
            </div>
          
            <div className='col-three ms-TextField'>
              <Checkbox label="Training flag" onChange={this._onCheckboxChange} />

            </div>
            <div className='col-three ms-TextField'>
              <Checkbox label="FAQ flag" onChange={this._onCheckboxChange} />
            </div>
            </div>
            

            <div className='col-three'>
              <DefaultButton>Save Ticket </DefaultButton>

            </div>







          </div>
        </section>
      </form>

    );
  }
  public componentDidMount() {
   // this.props.fetchSubmitterInfo();
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
      .filter(x => x.name.toLocaleLowerCase().indexOf(terms.toLocaleLowerCase()) > -1)
      .map(x => {
        return {
          id: x.id.toString(),
          primaryText: x.name,
          secondaryText: x.id
        } as IPersonaProps;
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