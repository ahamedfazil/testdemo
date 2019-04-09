import { Dropdown, IDropdownOption, ComboBox, Checkbox, IComboBoxOption, IComboBox } from 'office-ui-fabric-react';
import React from 'react';
import { IAppProps } from '../models/IAppProps';
import { IDictionaryState } from '../models/IDictionary';
import { IUserState } from '../models/IUser';

interface ISupportFieldState {
    selectedItem?: { key: string | number | undefined };
    selectedItems: string[],
    selectedOptionKeys?: string[];
    initialDisplayValueMulti?: string;
    optionsMulti?: IComboBoxOption[];
}

class SupportFields extends React.Component<IAppProps, ISupportFieldState>
{


    private _log(str: string): () => void {
        return (): void => {
            console.log(str);
        };
    }

    public changeState = (item: IDropdownOption): void => {
        console.log('here are the things updating...' + item.key + ' ' + item.text + ' ' + item.selected);
        this.setState({ selectedItem: item });
    };

    constructor(props: IAppProps) {
        super(props);

    }

    public render(): JSX.Element {


        const store = this.props.store;

        let ticket = this.props.store.ticket.currentTicket;

        const { selectedItem } = this.state;
        return (
            <div className="ms-Grid" dir="ltr">
                <div className='ms-Grid-row'>

                    <div className='col-three ms-TextField'>
                        <ComboBox
                            multiSelect
                            selectedKey={ticket.labels}
                            label="Labels"
                            allowFreeform={true}
                            autoComplete="on"
                            options={store.status.results.map(x => {
                                return {
                                    key: x.id,
                                    text: x.title,
                                } as IComboBoxOption;
                            })}
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
                <Dropdown
                    label="Ticket Type:"
                    selectedKey={selectedItem ? selectedItem.key : undefined}
                    onChanged={this.changeState}
                    placeholder="Choose Ticket Type"
                    options={store.ticketType.results.map(x => {
                        return {
                            key: x.id,
                            text: x.title,
                        } as IDropdownOption;
                    })}
                />
            </div>
        )

    }

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

    private _onCheckboxChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean): void {
        console.log(`The option has been changed to ${isChecked}.`);
    }

}

export default SupportFields

 // ReactDOM.render(<NewForm />, document.getElementById('content'));
