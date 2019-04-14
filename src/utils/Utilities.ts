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

export const getSpecificArrayFromJSONArray = (
  jsonArray: any[],
  fieldToPick: string
): any[] => {
  let dummyArray: any[] = [];
  jsonArray.map(singleJson => {
    dummyArray.push(singleJson[fieldToPick]);
  });
  return UniqueValInArray(dummyArray);
};

export const tagPickerOptionGenerator = (options: any[]): any[] => {
  let tagOptions: any[] = [];
  options.map(option => {
    if (option) {
      tagOptions.push({
        name: option,
        key: option
      });
    }
  });
  return tagOptions;
};

export const kendoComboOptionGenerator = (options: any[]): any[] => {
  let tagOptions: any[] = [];
  options.map(option => {
    if (option) {
      tagOptions.push({
        text: option,
        key: option
      });
    }
  });
  return tagOptions;
};

export const getDateFromString = (stringDate: string): Date => {
  if (stringDate) {
    // stringDate in DD-MM-YYYY format
    const YYYY = stringDate.split("/")[2];
    const MM = stringDate.split("/")[1];
    const DD = stringDate.split("/")[0];
    return new Date(`${YYYY}-${MM}-${DD}`);
  } else {
    return null;
  }
};

export const onFormatDate = (value: Date): any => {
  if (value) {
    let dateVal = value.getDate().toString();
    let monthVal = (value.getMonth() + 1).toString();
    if (dateVal && dateVal.length < 2) {
      dateVal = "0" + dateVal;
    }
    if (monthVal && monthVal.length < 2) {
      monthVal = "0" + monthVal;
    }
    const fullDateVal = dateVal + "/" + monthVal + "/" + value.getFullYear();
    return fullDateVal;
  } else {
    return null;
  }
};
