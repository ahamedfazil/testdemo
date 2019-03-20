import {
  DefaultButton,
  Dropdown, IDropdown, IDropdownOption, BaseComponent,
  TextField,
  DatePicker,
  NormalPeoplePicker,
  IPersonaProps
} from 'office-ui-fabric-react';
import { NewTicketProps } from '../containers/NewTicketProps';
import React from 'react';
import { Ticket } from '../../models/Ticket';
import { DictionaryItem } from '../../models/DictionaryItem';
import { User } from '../../models/User';
import { Submitter } from '../../models/Submitter';


export class NewTicket extends React.Component<NewTicketProps, {
  selectedItem?: { key: string | number | undefined | any };
  selectedItems: any[];
}>{
    _id: number;
    _requestId: Request;
    _submitter: IPersonaProps[];
    _submitterId:number; 
    _auditTeamCc: [];
    _respIndividual: User;
    _engagementName: string;
    _engagementChargeCode:number;
    _periodEnd:Date = this._periodEnd;
    _engagementType:DictionaryItem;
    _auditStandards:DictionaryItem;
    _accountFramework: DictionaryItem[];
    _category:DictionaryItem;
    _ticketType: DictionaryItem[];
    _subject:string;
    _detailedAnalysis:string;
    _isUrgent: boolean;
    _reasonForUrgency:string;
    _watcher: User[];
    _status:DictionaryItem;
    _comments: Comment[];
    _errors: any[];

    _supportTeam:DictionaryItem;
    _training:boolean;
    _faq: boolean;
    _assignee:User;
    _reviewer:User;
    _supportTeamComments:Comment[];
    _finalConsultation:string;
    _conclusion:string;
    _addToKb: boolean;
    _ticket: Ticket = this._ticket;

 

  private _basicDropdown = React.createRef<IDropdown>();

  constructor(props: {}) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selectedItems: [],
      
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
            </div>

            <div className="col-two ms-TextField">
            <label className="ms-Label">Created</label>
            <input className="ms-TextField-field" type="text" placeholder="" />
            </div>

            <div className="col-three ms-TextField">
            <Dropdown
          label="Priority:"
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
            <DatePicker isRequired={true} placeholder='Enter Date'
                            value={this._periodEnd}
                            onSelectDate={this.onPeriodEndDateChange} />
            </div>
            
            <div className='col-three'>
            </div>


            <div className='ms-Dropdown-container root-47 col-one'>
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

            <div className='col-two'>
            </div>
            
            <div className='col-three'>
            </div>

            <div className='ms-Dropdown-container root-47 col-one'>
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
        </div>
        
        <div className='col-one'>
            </div>
        
        <div className='col-two'>
            </div>
            
            <div className='col-three'>
            </div>

            <label className="ms-Label">Subject</label>
            <input className="ms-TextField-field" type="text" placeholder="" />

            <TextField label="Detailed Analysis" multiline rows={10} />

            <TextField label="Conclusion" multiline rows={5} />

            



            <DefaultButton>
              Submit
          </DefaultButton>
          
          

          

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
    this._submitter= items;
}

private searchPeople(terms: string): IPersonaProps[] | Promise<IPersonaProps[]> {
  return this.props.children
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