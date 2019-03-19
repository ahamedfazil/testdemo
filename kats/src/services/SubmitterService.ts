import { Submitter } from "../models/Submitter";
//import { sp } from '@pnp/sp'

export class SubmitterService {

    async get(_userId: string): Promise<Submitter[]> {

        const submitterInfo = new Submitter;

        let d = $.Deferred();

        let url = _spPageContextInfo.webAbsoluteUrl + '/_vti_bin/userprofileservice.asmx';

        const soap = '<?xml version="1.0" encoding="utf-8"?>' +
            '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
            '<soap:Body>' +
            '<GetUserProfileByName xmlns="http://microsoft.com/webservices/SharePointPortalServer/UserProfileService">' +
            '<AccountName>' + _userId + '</AccountName>' +
            '</GetUserProfileByName>' +
            '</soap:Body>' +
            '</soap:Envelope>';

        $.ajax({
            type: 'POST',
            url: url,
            data: soap,
            dataType: 'text',
            contentType: "text/xml; charset=utf-8",
            success: function (xmlData) {
                let results = $('GetUserProfileByNameResult PropertyData', xmlData);

                if (results.length) {
                    let userProfile = submitterInfo;
                    $.each(results, function (p, prop) {
                        userProfile[$(prop).find('name').text()] = $(prop).find('value').text();
                        
                    });
                    d.resolve(userProfile);
                    console.log(`
                    
                                LoginName: ${userProfile.user.id},
                                Name: ${userProfile.user.fullname}
                                Department: ${userProfile.department}
                                Job Title: ${userProfile.jobTitle}
                                Office: ${userProfile.office}                                
                                
                                `);
                    
                } else {
                    d.reject('getUserProfileAsmx: Could not get User Profile');
                }



            },

            error: function (error) {
                d.reject('getUserProfileAsmx: ' + error);
            }

        });
        return d.promise();
    };
}
