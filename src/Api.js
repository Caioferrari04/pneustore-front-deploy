export const Api = {

    baseUrl: 'https://pneustoreapi.azurewebsites.net',


    
    readAllUrl: () => Api.baseUrl + '/Product',


    buildApiGetRequest: url => {
        return fetch(url, {
            method: 'GET',
            
        })
    },

    buildApiPostRequest: (url ,body) =>{
        return fetch(url, {
            method: 'POST',
            headers: new Headers({
                Authorization : Api.authorization,
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(body)
        })
    }
}
