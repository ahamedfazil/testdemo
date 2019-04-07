
// export const url = 'https://sites.kpmg.co.uk/apps/katsdev'

export const url = 'https://xlitconsultinge.sharepoint.com/sites/katsdev'


const pnpConfig = {
    sp: {
        baseUrl: "https://xlitconsultinge.sharepoint.com/sites/katsdev",
        headers: {
            Accept: "application/json; odata=verbose",
            "Access-Control-Allow-Origin": "*"

        }
    }
}

export { pnpConfig };