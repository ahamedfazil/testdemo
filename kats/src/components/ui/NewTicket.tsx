import {
  DefaultButton,
  Dropdown, IDropdown, IDropdownOption,
  TextField,
  DatePicker,
  NormalPeoplePicker,
  IPersonaProps,
  BaseComponent,
  Checkbox,
  ComboBox,
  IComboBoxOption,
  IComboBox
} from 'office-ui-fabric-react';
import React from 'react';
import { Ticket } from '../../models/Ticket';
import { DictionaryItem } from '../../models/DictionaryItem';

const INITIAL_OPTIONS: IComboBoxOption[] = [
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
  { key: 'D', text: 'Option D' },
  { key: 'E', text: 'Option E' },
  { key: 'F', text: 'Option F', disabled: true },
  { key: 'G', text: 'Option G' },
  { key: 'H', text: 'Option H' },
  { key: 'I', text: 'Option I' },
  { key: 'J', text: 'Option J' }
];


export interface IComboBoxControlledExampleState {

  /** Current options for the multi-select example */
  optionsMulti: IComboBoxOption[];
  /** Current selected options for the multi-select example */
  selectedOptionKeys?: string[];
  /**
   * Initial display value for the multi-select example.
   * This will be cleared after the options are resolved for the first time.
   */
  initialDisplayValueMulti?: string;
}

export class NewTicket extends BaseComponent<any, {
  selectedItem?: { key: string | number | undefined | any };
  selectedItems: any[], selectedOptionKeys?: string[]; optionsMulti: IComboBoxOption[]; initialDisplayValueMulti?: string;
}>{
  _id: number = this._id;
  _requestId: Request = this._requestId;
  _submitter: IPersonaProps[] = this._submitter;
  _submitterId: number = this._submitterId;
  _auditTeamCc: [] = this._auditTeamCc;
  _respIndividual: IPersonaProps[] = this._respIndividual;
  _engagementName: string = this._engagementName;
  _engagementChargeCode: number = this._engagementChargeCode;
  _periodEnd: Date = this._periodEnd;
  _engagementType: DictionaryItem = this._engagementType;
  _auditStandards: DictionaryItem[] = this._auditStandards;
  _accountFramework: DictionaryItem[] = this._accountFramework;
  _category: DictionaryItem = this._category;
  _topic: DictionaryItem[] = this._topic;
  _ticketType: DictionaryItem[] = this._ticketType;
  _subject: string = this._subject;
  _detailedAnalysis: string = this._detailedAnalysis;
  _isUrgent: boolean = this._isUrgent;
  _reasonForUrgency: string = this._reasonForUrgency;
  _watcher: IPersonaProps[] = this._watcher;
  _status: DictionaryItem = this._status;
  _comments: Comment[] = this._comments;
  _errors: any[] = this._errors;

  _supportTeam: DictionaryItem = this._supportTeam;
  _training: boolean = this._training;
  _faq: boolean = this._faq;
  _assignee: IPersonaProps[] = this._assignee;
  _reviewer: IPersonaProps[] = this._reviewer;
  _supportTeamComments: Comment[] = this._supportTeamComments;
  _finalConsultation: string = this._finalConsultation;
  _conclusion: string = this._conclusion;
  _addToKb: boolean = this._addToKb;
  _ticket: Ticket = this._ticket;




  private _basicDropdown = React.createRef<IDropdown>();

  constructor(props: {}) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selectedItems: [],
      selectedOptionKeys: [],
      optionsMulti: [],
      initialDisplayValueMulti: ''


    };
  }

  // public submit = e => {
  //   e.preventDefault()

  //   onNewTicket({
  //     Ticket: this._ticket
  //   })

  // }

  public render() {
    const { selectedItem, selectedItems } = this.state;
    return (
      <form >
        <section id='ticket'>
          <div className="content-wrap">


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
                selectedKey={selectedItem ? selectedItem.key : 0}
                onChange={this.changeState}
                onFocus={this._log('onFocus called')}
                onBlur={this._log('onBlur called')}
                placeholder="Select an Option"
                options={[
                  { key: 0, text: 'Unassigned' },
                  { key: 1, text: 'In Progress' },
                  { key: 2, text: 'Pending Audit Team Input' },
                  { key: 3, text: 'Completed' },
                  { key: 4, text: 'Cancelled' },
                  { key: 5, text: 'Under Review' },

                ]}
              />
            </div>


            <div className="col-one ms-TextField">
              <label className="ms-Label">Engagement Name</label>
              <input className="ms-TextField-field" type="text" placeholder="" />
            </div>

            <div className="col-two ms-TextField">
              <Dropdown
                label="Priority:"
                selectedKey={selectedItem ? selectedItem.key : 0}
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
                onChange={this.onMemberChange}
                onResolveSuggestions={this.onFilterChanged}
                getTextFromItem={(persona: IPersonaProps) => persona.primaryText}
                className={'ms-PeoplePicker'}
                key={'normal'}
                itemLimit={1}
                selectedItems={this._submitter}
                pickerSuggestionsProps={{
                  noResultsFoundText: 'No results found',
                  loadingText: 'Loading...'
                }}
              />
            </div>


            <div className='ms-Dropdown-container root-47 col-one ms-TextField'>
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

            <div className='col-two ms-TextField'>
              <label className="ms-Label">Period End</label>
              <DatePicker isRequired={false} placeholder='Enter Date'
                value={this._periodEnd}
                onSelectDate={this.onPeriodEndDateChange} />
            </div>

            <div className="col-three ms-TextField">
              <label className="ms-Label">Assignee</label>
              <NormalPeoplePicker
                onChange={this.onMemberChange}
                onResolveSuggestions={this.onFilterChanged}
                getTextFromItem={(persona: IPersonaProps) => persona.primaryText}
                className={'ms-PeoplePicker'}
                key={'normal'}
                itemLimit={1}
                selectedItems={this._assignee}
                pickerSuggestionsProps={{
                  noResultsFoundText: 'No results found',
                  loadingText: 'Loading...'
                }}
              />
            </div>

            <div className='ms-Dropdown-container root-47 col-one ms-TextField'>
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

            <div className='col-two ms-TextField'>
              <label className="ms-Label">Charge Code</label>
              <input className="ms-TextField-field" type="text" placeholder="" />
            </div>

            <div className="col-three ms-TextField">
              <label className="ms-Label">Reviewer</label>
              <NormalPeoplePicker
                onChange={this.onMemberChange}
                onResolveSuggestions={this.onFilterChanged}
                getTextFromItem={(persona: IPersonaProps) => persona.primaryText}
                className={'ms-PeoplePicker'}
                key={'normal'}
                itemLimit={1}
                selectedItems={this._reviewer}
                pickerSuggestionsProps={{
                  noResultsFoundText: 'No results found',
                  loadingText: 'Loading...'
                }}
              />
            </div>

            <div className='ms-Dropdown-container root-47 col-one ms-TextField'>
              <Dropdown
                placeholder="Select options"
                label="Auditing Standards:"
                selectedKeys={selectedItems}
                onChange={this.onChangeMultiSelect}
                onFocus={this._log('onFocus called')}
                onBlur={this._log('onBlur called')}
                multiSelect
                options={[
                  { key: 'A', text: 'ISAs (UK)' },
                  { key: 'B', text: 'ISRE (UK&I)' },
                  { key: 'C', text: 'ISRS 4400' },
                  { key: 'D', text: 'ISAE 3000' },
                  { key: 'E', text: 'PCAOB' },
                  { key: 'F', text: 'AICPA' },
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
                onChange={this.onMemberChange}
                onResolveSuggestions={this.onFilterChanged}
                getTextFromItem={(persona: IPersonaProps) => persona.primaryText}
                className={'ms-PeoplePicker'}
                key={'normal'}
                itemLimit={1}
                selectedItems={this._auditTeamCc}
                pickerSuggestionsProps={{
                  noResultsFoundText: 'No results found',
                  loadingText: 'Loading...'
                }}
              />
            </div>

            <div className='ms-Dropdown-container root-47 col-one ms-TextField'>
              <Dropdown
                label="Ticket Type:"
                selectedKey={selectedItem ? selectedItem.key : this._ticketType}
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
            </div>

            <div className='ms-Dropdown-container root-47 col-two ms-TextField'>
              <Dropdown
                label="Category:"
                selectedKey={selectedItem ? selectedItem.key : this._category}
                onChange={this.changeState}
                onFocus={this._log('onFocus called')}
                onBlur={this._log('onBlur called')}
                placeholder="Select an Option"
                options={[
                  { key: 'A', text: 'Annual report – front end (APMs, strategic report, corporate governance)' },
                  { key: 'B', text: 'Interim report' },
                  { key: 'C', text: 'Formal Consultation' },
                  { key: 'D', text: 'UK Company Law' },
                  { key: 'E', text: 'Audit reports and other reporting' },
                  { key: 'F', text: 'Prior period restatements and revised accounts' }
                ]}
              />
            </div>

            <div className="col-three ms-TextField">
              <label className="ms-Label">Engagement RI</label>
              <NormalPeoplePicker
                onChange={this.onMemberChange}
                onResolveSuggestions={this.onFilterChanged}
                getTextFromItem={(persona: IPersonaProps) => persona.primaryText}
                className={'ms-PeoplePicker'}
                key={'normal'}
                itemLimit={1}
                selectedItems={this._respIndividual}
                pickerSuggestionsProps={{
                  noResultsFoundText: 'No results found',
                  loadingText: 'Loading...'
                }}
              />
            </div>

            <div className='col-one ms-TextField'>
              <label className="ms-Label">Subject</label>
              <input className="ms-TextField-field" type="text" placeholder="" />
            </div>

            <div className='ms-Dropdown-container root-47 col-two ms-TextField'>
              <Dropdown
                label="Topics:"
                selectedKey={selectedItem ? selectedItem.key : this._topic}
                onChange={this.changeState}
                onFocus={this._log('onFocus called')}
                onBlur={this._log('onBlur called')}
                placeholder="Select an Option"
                options={[
                  { key: 'A', text: 'Annual report – front end (APMs, strategic report, corporate governance)' },
                  { key: 'B', text: 'Interim report' },
                  { key: 'C', text: 'Formal Consultation' },
                  { key: 'D', text: 'UK Company Law' },
                  { key: 'E', text: 'Audit reports and other reporting' },
                  { key: 'F', text: 'Prior period restatements and revised accounts' }
                ]}
              />
            </div>

            <div className="col-three ms-TextField">
              <label className="ms-Label">Watchers</label>
              <NormalPeoplePicker
                onChange={this.onMemberChange}
                onResolveSuggestions={this.onFilterChanged}
                getTextFromItem={(persona: IPersonaProps) => persona.primaryText}
                className={'ms-PeoplePicker'}
                key={'normal'}
                itemLimit={1}
                selectedItems={this._watcher}
                pickerSuggestionsProps={{
                  noResultsFoundText: 'No results found',
                  loadingText: 'Loading...'
                }}
              />
            </div>

            <div className='col-wide ms-TextField'>
              <TextField label="Detailed Analysis" multiline rows={10} />
            </div>

            <div className='col-three ms-TextField'>
              <label className="ms-Label">Topic Leads</label>
              <input className="ms-TextField-field" type="text" placeholder="" />
            </div>

            <div className='col-wide ms-TextField'>
              <TextField label="Conclusion" multiline rows={5} />
            </div>

           
            <div className='col-three ms-TextField'>
                <Checkbox label="Knowledge Base candidate" onChange={this._onCheckboxChange} />
              </div>
      

            <div className='col-three ms-TextField'>
              <Checkbox label="Training flag" onChange={this._onCheckboxChange} />

            </div>

            <div className='col-three ms-TextField'>
              <Checkbox label="FAQ flag" onChange={this._onCheckboxChange} />
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


            <div className='col-three'>
              <DefaultButton>Save Ticket </DefaultButton>

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
  private onPeriodEndDateChange(date: Date): void {
    this._periodEnd = date;
  }

  private onMemberChange(items: any[]): void {
    this._submitterId = items[0] ? +items[0].key : undefined;
    this._submitter = items;
  }

  private searchPeople(terms): IPersonaProps[] | Promise<IPersonaProps[]> {
    return this.props
      .filter(x => x.fullName.toLocaleLowerCase().indexOf(terms.toLocaleLowerCase()) > -1)
      .map(x => {
        return {
          id: x.id.toString(),
          primaryText: x.fullName,
          secondaryText: x.login
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



// const newTicket = ({ticket={},onNewTicket=f=>f}) => {
//     //let ticket = new Ticket();








//  }


export default NewTicket