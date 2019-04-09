import pnp from '@pnp/pnpjs';
  
export function GetUser() {
    pnp.setup({
                sp: {
                    headers: {
                        "Accept": "application/json; odata=verbose"
                    }
                }
                      
            });
  
    pnp.sp.web.currentUser.get().then(result => {
        console.log(result);
    });
  
}
  
function CheckIfUserBelongsToGroup(groupName: string, userEmail: string) {
  
    pnp.sp.web.siteGroups.getByName(groupName).users.getByEmail(userEmail).get().then(rs => {
        console.log("user belongs to group");
    }).catch(error => {
        console.log("user does not belong");
    })
  
}
  
function getExtendedManagers() {
  
    var managers: any = [];
  
    pnp.setup({
          sp: {
            headers: {
                "Accept": "application/json; odata=verbose"
            }
          }
              
        });
  
    pnp.sp.profiles.myProperties.select("ExtendedManagers").get().then(d => {
  
        managers = d.ExtendedManagers.results;
        console.log(managers);
    });
}
  
function getMyProperties() {
  
    pnp.setup({
          sp: {
            headers: {
                "Accept": "application/json; odata=verbose"
            }
          }
              
        });
  
    pnp.sp.profiles.myProperties.get().then(d => {
  
       var properties = d.UserProfileProperties.results;
  
       console.log(properties);
       
    });
  
}
 
function getUserProfilePropertyForUser(userLoginName: string, propertyName: string) {
  
    pnp.setup({
          sp: {
            headers: {
                "Accept": "application/json; odata=verbose"
            }
          }
              
        });
  
    pnp.sp.profiles.getUserProfilePropertyFor(userLoginName, propertyName).then((result: any) => {
  
         
        console.log(result.GetUserProfilePropertyFor);
    });
}

