import { ITicketProps } from "../models/ITicketProps";
import pnp from "@pnp/pnpjs";
import { CONST } from "../utils/const";
import {
  UniqueValInArray,
  getSpecificArrayFromJSONArray
} from "../utils/Utilities";
import { ITicketDictionary, ITicketCategory } from "../models/ITicketState";
import { ICurrentUserState } from "../models/IUserState";

export function getTicketDictionary(props: ITicketProps) {
  //#region Get Fields from Lists
  let dictionaryState: ITicketDictionary = Object.assign(
    {},
    props.store.ticket.ticketDictionary
  );
  if (!dictionaryState.isFetched) {
    props.getTicketDictionaryInProgress();

    const engagementType = getFieldValuesFromList(
      CONST.Lists.EngagementType.ListName,
      [CONST.Lists.EngagementType.Columns.Title.Internal_Name]
    );

    const accountingFramework = getFieldValuesFromList(
      CONST.Lists.AccountingFramework.ListName,
      [CONST.Lists.AccountingFramework.Columns.Title.Internal_Name]
    );

    const auditingStandard = getFieldValuesFromList(
      CONST.Lists.AuditingStandard.ListName,
      [CONST.Lists.AuditingStandard.Columns.Title.Internal_Name]
    );

    const status = getFieldValuesFromList(CONST.Lists.Status.ListName, [
      CONST.Lists.Status.Columns.Title.Internal_Name
    ]);
    const ticketType = getFieldValuesFromList(CONST.Lists.TicketType.ListName, [
      CONST.Lists.TicketType.Columns.Title.Internal_Name
    ]);

    const sentinelGisId = getFieldValuesFromList(
      CONST.Lists.SentinelGisId.ListName,
      [CONST.Lists.SentinelGisId.Columns.Title.Internal_Name]
    );
    const labels = getFieldValuesFromList(CONST.Lists.Labels.ListName, [
      CONST.Lists.Labels.Columns.Title.Internal_Name
    ]);

    //#endregion
    Promise.all([
      engagementType,
      accountingFramework,
      auditingStandard,
      status,
      ticketType,
      sentinelGisId,
      labels
    ])
      .then(async function(optionResponse) {
        function optionFilter(values: any) {
          if (values !== undefined) {
            values.map((value: any) => {
              switch (value.listField) {
                case CONST.Lists.EngagementType.ListName +
                  CONST.Lists.EngagementType.Columns.Title.Internal_Name:
                  dictionaryState.engagementType = UniqueValInArray(
                    value.options
                  );
                  break;
                case CONST.Lists.AccountingFramework.ListName +
                  CONST.Lists.AccountingFramework.Columns.Title.Internal_Name:
                  dictionaryState.accountingFramework = UniqueValInArray(
                    value.options
                  );

                case CONST.Lists.AuditingStandard.ListName +
                  CONST.Lists.AuditingStandard.Columns.Title.Internal_Name:
                  dictionaryState.auditingStandard = UniqueValInArray(
                    value.options
                  );
                  break;
                case CONST.Lists.Status.ListName +
                  CONST.Lists.Status.Columns.Title.Internal_Name:
                  dictionaryState.status = UniqueValInArray(value.options);
                case CONST.Lists.TicketType.ListName +
                  CONST.Lists.TicketType.Columns.Title.Internal_Name:
                  dictionaryState.ticketType = UniqueValInArray(value.options);
                  break;
                case CONST.Lists.SentinelGisId.ListName +
                  CONST.Lists.SentinelGisId.Columns.Title.Internal_Name:
                  dictionaryState.sentinelGisId = UniqueValInArray(
                    value.options
                  );
                case CONST.Lists.Labels.ListName +
                  CONST.Lists.Labels.Columns.Title.Internal_Name:
                  dictionaryState.labels = UniqueValInArray(value.options);
                  break;
                default:
                  break;
              }
            });
          }
        }
        optionResponse.filter(optionFilter);
        await getCategoryList(
          CONST.Lists.Category.ListName,
          [
            CONST.Lists.Category.Columns.Title.Internal_Name,
            CONST.Lists.Category.Columns.Topic.Internal_Name,
            CONST.Lists.Category.Columns.SupportTeam.Internal_Name
          ],
          [CONST.Lists.Category.Columns.SupportTeam.Internal_Name]
        )
          .then(catResponse => {
            dictionaryState.category = catResponse;
            setIsSupportUser(props, catResponse);
            dictionaryState.isFetched = true;
            props.getTicketDictionarySuccess(dictionaryState);
          })
          .catch(categoryError => {
            props.getTicketDictionaryError(categoryError);
          });
      })
      .catch(promiseAllError => {
        // Dispatch an Action for Error in Project Field Error
        props.getTicketDictionaryError(promiseAllError);
      });
  }
}

const setIsSupportUser = (props: ITicketProps, categoryList: any[]) => {
  let supportGroup: any[] = getSpecificArrayFromJSONArray(
    categoryList,
    CONST.Lists.Category.Columns.SupportTeam.Internal_Name
  );
  supportGroup = getSpecificArrayFromJSONArray(supportGroup, "Title");
  const userMemberOf: any[] = props.store.user.currentUser.memberOf;
  const isSupportUser = supportGroup.filter(group =>
    userMemberOf.includes(group)
  );
  let currentUser: ICurrentUserState = Object.assign(
    {},
    props.store.user.currentUser
  );
  currentUser.isSupportUser = true; // isSupportUser.length > 0 ? true : false;
  props.getCurrentUserSuccess(currentUser);
};

const getFieldValuesFromList = (listName: string, fieldNames: string[]) => {
  return new Promise((resolve, reject) => {
    pnp.sp.web.lists
      .getByTitle(listName)
      .items.top(5000)
      .get()
      .then(fieldData => {
        let fieldWithOptions: any[] = [];
        fieldNames.map((field: any) => {
          fieldWithOptions.push({
            listField: listName + field,
            options: fieldData
              .filter((data: any) => {
                if (data[field] === null) {
                  return false;
                }
                return true;
              })
              .map((data: any) => data[field])
          });
        });
        resolve(fieldWithOptions);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const getCategoryList = async (
  listName: string,
  fieldNames: string[],
  expandFields: string[]
) => {
  let localCategory: ITicketCategory[] = [];
  localCategory = await pnp.sp.web.lists
    .getByTitle(listName)
    .items.select(
      ...fieldNames,
      CONST.Lists.Category.Columns.SupportTeam.Internal_Name + "/Id",
      CONST.Lists.Category.Columns.SupportTeam.Internal_Name + "/Title",
      CONST.Lists.Category.Columns.SupportTeam.Internal_Name + "/Name",
      CONST.Lists.Category.Columns.SupportTeam.Internal_Name + "/EMail"
    )
    .expand(...expandFields)
    .top(5000)
    .get()
    .then((fieldData: any[]) => {
      fieldData.map(data => {
        localCategory.push({
          Topic: data[CONST.Lists.Category.Columns.Topic.Internal_Name],
          Title: data[CONST.Lists.Category.Columns.Title.Internal_Name],
          Support_x0020_Team:
            data[CONST.Lists.Category.Columns.SupportTeam.Internal_Name]
        });
      });
      return localCategory;
    })
    .catch(() => null);
  return localCategory;
};
