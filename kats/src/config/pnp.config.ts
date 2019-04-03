
export const url = 'https://sites.kpmg.co.uk/apps/katsdev'

const pnpConfig = {
    sp: {
        baseUrl: "https://sites.kpmg.co.uk/apps/katsdev",
        headers: {
            Accept: "application/json; odata=verbose",
            "Access-Control-Allow-Origin": "*"

        }
    }
}

export { pnpConfig };