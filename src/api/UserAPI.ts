import pnp from '@pnp/pnpjs';
import update from 'immutability-helper';

import { IUserState } from '../models/IUser';
import { IAppProps } from '../models/IAppProps';

export const getUserByID = (userID: any) => {
    return pnp.sp.web.siteUsers
        .getById(userID)
        .get()
        .then((response: any) => {
            return response;
        });
};


export const getUserProfileByName = (userName:string) =>{
    let userProfile:IUserState;
    const url = _spPageContextInfo.webAbsoluteUrl + '/_vti_bin/userprofileservice.asmx';
    const soap = '<?xml version="1.0" encoding="utf-8"?>' +
                '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
                '<soap:Body>' +
                '<GetUserProfileByName xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService">' +
                '<AccountName>' + userName + '</AccountName>' +
                '</GetUserProfileByName>' +
                '</soap:Body>' +
                '</soap:Envelope>';
    
    try{
         
        return fetch(`${url}`, {
            method: 'POST',
            headers: {
            accept: "application/json;odata=verbose",
        },
        body:soap,
        })
        .then(function (response) {
            return response.text()
        })
        .then(function(text){
            
        })

    }catch(error){
        console.log(error);
        
    }
   
}

export async function getCurrentUser(props: IAppProps) {
    let userState: IUserState = update(props.store.user.userState, {
        memberOf: { $set: [] }
    });
    if (!props.store.user.userState.isFetched) {
        //Dispatch get current user action
        props.getCurrentUser();
        try {
            const userDataResponse = await pnp.sp.web.currentUser
                .get()
                .then(response => {
                    userState.id = response.Id;
                    userState.loginName = response.LoginName;
                    userState.name = response.name;
                    userState.title = response.Title;
                    return response;
                });
            const userPropertiesPromise = pnp.sp.profiles
                .getPropertiesFor(userDataResponse.LoginName)
                .then(response => {
                    return response;
                });
            const UserGroupsPromise = pnp.sp.web.siteUsers
                .getById(userDataResponse.Id)
                .groups.get()
                .then(response => {
                    return response;
                });

            Promise.all([userPropertiesPromise, UserGroupsPromise])
                .then(function (response) {
                    let propertyResponse = response[0];
                    let resultProps = propertyResponse.UserProfileProperties.results;
                    for (let prop of resultProps) {
                        switch (prop.Key) {
                            case 'AccountName':
                                userState.loginName = prop.Value;
                            case 'JobTitle':
                                userState.title = prop.Value;
                            case 'Department':
                                userState.department = prop.Value;
                            case 'FirstName':
                                userState.firstName = prop.Value;
                            case 'LastName':
                                userState.lastName = prop.Value;
                            case 'Office':
                                userState.office = prop.Value;
                            case 'WorkPhone':
                                userState.officeNumber;
                            case 'WorkEmail':
                                userState.email = prop.Value;
                            case 'Name':
                                userState.email = prop.Value;
                            default:
                                return prop;
                        }

                    }
                    let groupsResponse = response[1];
                    for (let groupTitle of groupsResponse) {
                        userState.memberOf.push(groupTitle.Title);
                    }
                    userState.isSupportUser = userState.memberOf.includes('Support');
                    userState.isUser = userState.memberOf.includes('SharePoint IUser');

                    //Dispatch success action
                    userState.isFetched = true;
                    props.getCurrentUserSuccess(userState);
                })
                .catch(error => {
                    console.log(error);
                    //Dispatch error action
                    props.getCurrentUserError(error);

                });

        } catch (error) {
            console.log(error);

            props.getCurrentUserError(error);

        }
    }

}