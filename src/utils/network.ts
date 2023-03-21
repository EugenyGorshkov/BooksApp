/**
 * Отправляет запрос fetch
 * @param {String} url - url для запроса
 * @return {Promise} - Promise с результатом запроса
 */

export const getApiResource = async (url:string): Promise<any> => {
    try {
        const res = await fetch(url); 
        
        if(!res.ok) {
            console.error('Could not fetch.', res.status);
            return false;
        } 
        
        return await res.json();
    }
    catch (error) {
        let message = 'Unknown Error'
        if (error instanceof Error) message = error.message;
        reportError({ message })
        // console.error('Could not fetch.', error.message);
        return false;
    }
}