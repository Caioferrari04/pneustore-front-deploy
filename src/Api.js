export const Api = {

    baseUrl: 'https://pneustoreapi.azurewebsites.net',


    
    readAllUrl: () => Api.baseUrl + '/Product',


    buildApiGetRequest: url => {
        return fetch(url, {
            method: 'GET',
            
        })
    }
}