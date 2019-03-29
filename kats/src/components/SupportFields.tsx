import { Dropdown, IDropdownOption } from 'office-ui-fabric-react';
import React from 'react';
import ReactDOM from 'react-dom';
  
  class NewForm extends React.Component<any,
      {
          selectedItem?: { key: string | number | undefined };
          selectedItems: string[],
          selectedOptionKeys?: string[];
          initialDisplayValueMulti?: string;
  
      }>{
  
  
      private _log(str: string): () => void {
          return (): void => {
              console.log(str);
          };
      }
  
      public changeState = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
          console.log('here are the things updating...' + item.key + ' ' + item.text + ' ' + item.selected);
          this.setState({ selectedItem: item });
      };
  
      constructor(props: {}) {
          super(props);
          this.state = {
              selectedItem: undefined,
              selectedItems: [],
              selectedOptionKeys: [],
  
              initialDisplayValueMulti: '',
  
          };
      }
  
      public render() {
  
          const { selectedItem } = this.state;
          return (
              <form >
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
              </form>
          )
  
      }
  }

export default NewForm

 // ReactDOM.render(<NewForm />, document.getElementById('content'));
  