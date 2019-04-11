import { IDropdownOption } from "office-ui-fabric-react/lib/Dropdown";

export function UniqueValInArray(val: any[]) {
  return val.filter(function(elem, pos, arr) {
    return arr.indexOf(elem) === pos;
  });
}

export const dropdownOptions = (optionArray: any[]): IDropdownOption[] => {
  let dropdownOptionVal: IDropdownOption[] = [];
  optionArray.map(function(value: string) {
    dropdownOptionVal.push({ key: value, text: value } as IDropdownOption);
  });
  return dropdownOptionVal;
};
