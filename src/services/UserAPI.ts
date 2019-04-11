import pnp from "@pnp/pnpjs";
import { CONST } from "../utils/const";
import { IAppProps } from "../models/IAppProps";
import { ICurrentUserState } from "../models/IUserState";

export const getUserByID = (userID: any) => {
  return pnp.sp.web.siteUsers
    .getById(userID)
    .get()
    .then(response => {
      return response;
    });
};

export async function getCurrentUser(props: IAppProps) {
  let userState: ICurrentUserState = Object.assign({}, props.store.user.currentUser);
  if (!props.store.user.currentUser.isFetched) {
    // Dispatch an Action for getCurrentUser in Progress
    props.getCurrentUserInProgress();
    try {
      //User 'await' to get serializable execution inside async function
      const userDataResponse = await pnp.sp.web.currentUser
        .get()
        .then(response => {
          userState.id = response.Id;
          userState.loginName = response.LoginName;
          userState.email = response.Email;
          userState.name = response.Title;
          return response;
        });

      const userPropertiesPromise = pnp.sp.profiles
        .getPropertiesFor(userDataResponse.LoginName)
        .then(response => {
          return response;
        });

      const userGroupsPromise = pnp.sp.web.siteUsers
        .getById(userDataResponse.Id)
        .groups.get()
        .then(response => {
          return response;
        });

      //Promise.all to run parallel on getuser(Property&Groups)
      Promise.all([userPropertiesPromise, userGroupsPromise])
        .then(function(response) {
          let propertyResponse = response[0];
          // userState.office = propertyResponse.office.results;
          let resultProps = propertyResponse.UserProfileProperties.results;
          for (let prop of resultProps) {
            if (prop.Key === "AccountName") {
              userState.accountName = prop.Value;
            } else if (prop.Key === "FirstName") {
              userState.firstName = prop.Value;
            } else if (prop.Key === "LastName") {
              userState.lastName = prop.Value;
            } else if (prop.Key === "officeNumber") {
              userState.officeNumber = prop.Value;
            } else if (prop.Key === "DepartmentTitle") {
              userState.department = prop.Value;
            } else if (prop.Key === "Manager") {
              userState.managerId = prop.Value;
            }
          }
          let groupsResponse = response[1];
          for (let groupTitle of groupsResponse) {
            userState.memberOf.push(groupTitle.Title);
          }
          userState.isSupportUser = userState.memberOf.includes(
            CONST.Site.SupportGroup
          );
          userState.isUser = userState.memberOf.includes(CONST.Site.UserGroup);

          //Dispatch an Action for Success in getCurrentUser
          userState.isFetched = true;
          props.getCurrentUserSuccess(userState);
        })
        .catch(error => {
          console.log(error);
          // Dispatch an Action for Error in getCurrentUser
          props.getCurrentUserError(error);
        });
    } catch (error) {
      console.log(error);
      // Dispatch an Action for Error in getCurrentUser
      props.getCurrentUserError(error);
    }
  }
}
