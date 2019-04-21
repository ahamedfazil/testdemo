import { IDropdownOption } from "office-ui-fabric-react/lib/Dropdown";
import { CONST } from "./const";
import { IGroup } from "office-ui-fabric-react";


export function UniqueValInArray(val: any[]) {
  return val.filter(function(elem, pos, arr) {
    return arr.indexOf(elem) === pos;
  });
}

export const getArrayFromString = (arrayString: string) => {
  if (arrayString) {
    return arrayString.split(CONST.Others.ArraySplitter);
  } else {
    return [];
  }
};

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

export const createGroup = (
  groupCount: number,
  groupDepth: number,
  startIndex: number,
  itemsPerGroup: number,
  name: string,
  level: number = 0,
  key: string = "",
  isCollapsed?: boolean
): IGroup[] => {
  if (key !== "") {
    key = key + "-";
  }
  let count = Math.pow(itemsPerGroup, groupDepth);
  return Array.apply(null, Array(groupCount)).map(
    (value: number, index: number) => {
      return {
        count: count,
        key: "group" + key + index,
        name: name,
        startIndex: index * count + startIndex,
        level: level,
        isCollapsed: isCollapsed,
        children:
          groupDepth > 1
            ? createGroup(
                groupCount,
                groupDepth - 1,
                index * count + startIndex,
                itemsPerGroup,
                name,
                level + 1,
                key + index,
                isCollapsed
              )
            : []
      };
    }
  );
};
