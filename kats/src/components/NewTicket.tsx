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
import { } from '../actions/ticket';
import { } from '../actions/dictionaryItem';



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


// const Ticket = ({ticket,filter, onNewTicket=f=>f})=>{
//   const requestView = (!filter || !filter.match(/request|ticket/))?
//     ticket: 
//     ticket.filter()
// }


const NewTicket = ({engagementType,accountingFramework, auditingStandard,
  category, topic, ticketType, status, onNewTicket=f=>f }) =>{

let _ticket:Ticket;


const submit = e => {
  e.preventDefault()
  onNewTicket({
    ticket: _ticket,
  })
  }
  return (

    <section id='ticket'>
      <div className="content-wrap">

        <div className = 'ms-Grid-row'>
        <div className="col-one ms-TextField">
          <label className="ms-Label">Ticket ID</label>
          <input className="ms-TextField-field" 
                 value = {_ticket.id}
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
            selectedKey={_ticket.status}
            onChange={changeState}
            placeholder="Select an Option"
            options={status.map(x =>{
              return{
                key:x.Id,
                text: x.Title,
              } as IDropdownOption;
            }) }
          />
        </div>
        </div>
        <div className = 'ms-Grid-row'>
        <div className="col-one ms-TextField">
          <label className="ms-Label">Engagement Name</label>
          <input className="ms-TextField-field" 
                 value={_ticket.engagementName}
                 type="text" 
                 placeholder="" />
        </div>

        <div className="col-two ms-TextField">
          <Dropdown
            label="Priority:"
            selectedKey={_ticket.isUrgent}
            onChange={changeState}
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
            onResolveSuggestions={onFilterChanged}
            getTextFromItem={_getTextFromItem}
            className={'ms-PeoplePicker'}
            key={_ticket.submitterId}
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
            label="Engagement Types:"
            selectedKeys={_ticket.engagementType}
            onChange={onChangeMultiSelect}
            multiSelect
            options={engagementType.map(x =>{
              return{
                key:x.Id,
                text: x.Title,
              } as IDropdownOption;
            }) }
          />
        </div>

        <div className='col-two ms-TextField'>
          <label className="ms-Label">Period End</label>
          <DatePicker isRequired={false} placeholder='Enter Date'
            value={_ticket.periodEnd}
            onSelectDate={onPeriodEndDateChange} />
        </div>

        <div className="col-three ms-TextField">
          <label className="ms-Label">Assignee</label>
          <NormalPeoplePicker
            onResolveSuggestions={onFilterChanged}
            getTextFromItem={(persona: IPersonaProps) => persona.primaryText}
            className={'ms-PeoplePicker'}
            key={_ticket.assignee}
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
            selectedKeys={_ticket.accountingFramework}
            onChange={onChangeMultiSelect}
            onFocus={_log('onFocus called')}
            onBlur={_log('onBlur called')}
            multiSelect
            options={accountingFramework.map(x =>{
              return{
                key:x.Id,
                text: x.Title,
              } as IDropdownOption;
            }) }
          />
        </div>

        <div className='col-two ms-TextField'>
          <label className="ms-Label">Charge Code</label>
          <input className="ms-TextField-field" 
                 value= {_ticket.engagementChargeCode} 
                 type="text" placeholder="" />
        </div>

        <div className="col-three ms-TextField">
          <label className="ms-Label">Reviewer</label>
          <NormalPeoplePicker
            onResolveSuggestions={onFilterChanged}
            getTextFromItem={(persona: IPersonaProps) => persona.primaryText}
            className={'ms-PeoplePicker'}
            key={_ticket.reviewer}
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
            selectedKeys={_ticket.auditingStandard}
            onChange={onChangeMultiSelect}
            onFocus={_log('onFocus called')}
            onBlur={_log('onBlur called')}
            multiSelect
            options={auditingStandard.map(x =>{
              return{
                key:x.Id,
                text: x.Title,
              } as IDropdownOption;
            }) }
          />
        </div>

        <div className='col-two ms-TextField'>
          <label className="ms-Label">Support Team</label>
          <input className="ms-TextField-field" type="text" placeholder="" />
        </div>

        <div className="col-three ms-TextField">
          <label className="ms-Label">Audit Team</label>
          <NormalPeoplePicker
            onResolveSuggestions={onFilterChanged}
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
            selectedKey={_ticket.ticketType}
            onChange={changeState}
            onFocus={_log('onFocus called')}
            onBlur={_log('onBlur called')}
            placeholder="Select an Option"
            options={ticketType.map(x =>{
              return{
                key:x.Id,
                text: x.Title,
              } as IDropdownOption;
            }) }
          />
        </div>

        <div className='ms-Dropdown-container root-47 col-two ms-TextField'>
          <Dropdown
            label="Category:"
            selectedKey={_ticket.category}
            onChange={changeState}
            onFocus={_log('onFocus called')}
            onBlur={_log('onBlur called')}
            placeholder="Select an Option"
            options={category.map(x =>{
              return{
                key:x.Id,
                text: x.Title,
              } as IDropdownOption;
            }) }
          />
        </div>

        <div className="col-three ms-TextField">
          <label className="ms-Label">Engagement RI</label>
          <NormalPeoplePicker
            onResolveSuggestions={onFilterChanged}
            getTextFromItem={(persona: IPersonaProps) => persona.primaryText}
            className={'ms-PeoplePicker'}
            key={_ticket.respIndividual}
            itemLimit={1}
            // selectedItems={_ticket.respIndividual}
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
          <input  className="ms-TextField-field" 
                  value = {_ticket.subject}
                  type="text" 
                  placeholder="" />
        </div>

        <div className='ms-Dropdown-container root-47 col-two ms-TextField'>
          <Dropdown
            label="Topics:"
            selectedKey={_ticket.topic}
            onChange={changeState}
            onFocus={_log('onFocus called')}
            onBlur={_log('onBlur called')}
            placeholder="Select an Option"
            options={topic.map(x =>{
              return{
                key:x.Id,
                text: x.Title,
              } as IDropdownOption;
            }) }
          />
        </div>

        <div className="col-three ms-TextField">
          <label className="ms-Label">Watchers</label>
          <NormalPeoplePicker
            onResolveSuggestions={onFilterChanged}
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
          <TextField label="Conclusion"
                     value= {_ticket.conclusion}  
                     multiline rows={5} />
        </div>
        
        <div className='col-three ms-TextField'>
          <ComboBox
            multiSelect
            selectedKey={_ticket.label}
            label="Labels"
            allowFreeform={true}
            autoComplete="on"
            options={state.optionsMulti}
            onChange={_onChangeMulti}
            onResolveOptions={_getOptionsMulti}
            text={state.initialDisplayValueMulti}
          />
        </div>
        </div>

        <div className = 'ms-Grid-row'>

        <div className='col-three ms-TextField'>
          <Checkbox label="Knowledge Base candidate" 
                    onChange={_onCheckboxChange}
                    value={_ticket.addToKb} />
        </div>
      
        <div className='col-three ms-TextField'>
          <Checkbox label="Training flag" onChange={_onCheckboxChange} />

        </div>
        <div className='col-three ms-TextField'>
          <Checkbox label="FAQ flag" onChange={_onCheckboxChange} />
        </div>
        </div>
        

        <div className='col-three'>
          <DefaultButton onClick = {submit}>Save Ticket </DefaultButton>

        </div>

      </div>
    </section>
  

);

function onPeriodEndDateChange(date: Date): void {
  _ticket.periodEnd = date;
}

const changeState = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
  console.log('here are the things updating...' + item.key + ' ' + item.text + ' ' + item.selected);
  setState({ selectedItem: item });
};

const onChangeMultiSelect = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
  const updatedSelectedItem = state.selectedItems ? copyArray(state.selectedItems) : [];
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
  setState({
    selectedItems: updatedSelectedItem
  });
};

function copyArray = (array: any[]): any[] => {
  const newArray: any[] = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i];
  }
  return newArray;
};

function _onSetFocusButtonClicked = (): void => {
  if (_basicDropdown.current) {
    _basicDropdown.current.focus(true);
  }
};

function _log(str: string): () => void {
  return (): void => {
    console.log(str);
  };
}




function searchPeople(terms): IPersonaProps[] | Promise<IPersonaProps[]> {
  return props.users
    .filter(x => x.name.toLocaleLowerCase().indexOf(terms.toLocaleLowerCase()) > -1)
    .map(x => {
      return newMethod(x);
    });
}

private newMethod(x: User): IPersonaProps {
  return {
    id: x.id.toString(),
    primaryText: x.name,
    secondaryText: x.id
  } as unknown as IPersonaProps;
}

function onFilterChanged(filterText: string) {
  if (filterText) {
    if (filterText.length > 2) {
      return searchPeople(filterText);
    }
  } else {
    return [];
  }
  return [];
}


function _onCheckboxChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean): void {
  console.log(`The option has been changed to ${isChecked}.`);
}

function _getOptionsMulti = (currentOptions: IComboBoxOption[]): IComboBoxOption[] => {
  if (state.optionsMulti.length > 0) {
    return state.optionsMulti;
  }

  const options = [...INITIAL_OPTIONS];

  setState({
    optionsMulti: options,
    selectedOptionKeys: ['C', 'D'],
    initialDisplayValueMulti: undefined
  });

  return options;
};


function _onChangeMulti = (event: React.FormEvent<IComboBox>, option?: IComboBoxOption, index?: number, value?: string) => {
  console.log('_onChangeMulti() is called: option = ' + JSON.stringify(option));
  const currentSelectedKeys = state.selectedOptionKeys || [];
  if (option) {
    // User selected/de-selected an existing option
    setState({
      selectedOptionKeys: _updateSelectedOptionKeys(currentSelectedKeys, option)
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

function _updateSelectedOptionKeys = (selectedKeys: string[], option: IComboBoxOption): string[] => {
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



  }

  
  
  
  NewTicket.propTypes = {
    // fetchSubmitterInfo: PropTypes.func.isRequired,
    // users: PropTypes.arrayOf(
    //   PropTypes.instanceOf(User).isRequired,
    //    ),
    onNewTicket:PropTypes.func,
    engagementType:PropTypes.array,
    accountingFramework:PropTypes.array,
    auditingStandard:PropTypes.array,
    category: PropTypes.array,
    topic: PropTypes.array,
    ticketType: PropTypes.array,
    status: PropTypes.array
  }


class _NewTicket extends React.Component<any,
  {
    selectedItem?: { key: string | number | undefined };
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
    engagementType:[],
    accountingFramework: [],
    auditingStandard: [],
    category:[],
    topic:[],
    ticketType:[],
    status:any[],
    
  }>
{
 



componentDidMount(){
  this.props.ticket;
  this.props.users;
  this.props.addEngagementType;

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
      isPickerDisabled: false,
      engagementType:[],
      accountingFramework: [],
      auditingStandard: [],
      category:[],
      topic:[],
      ticketType:[],
      status:[],
      
    };
  }




  public render() {
    const { selectedItem } = this.state;
   
    
   
    
  }


  

  
  public addTicketForm = ({ onNewTicket=f => f }) => {
    let _ticket: Ticket
    const submit = e => {
    e.preventDefault()
    onNewTicket({
    ticket: _ticket,
    })
    }
    }

}




export default NewTicket