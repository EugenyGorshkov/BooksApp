// common
export const HTTPS = 'https://'

//api
export const GOOGLE_API_ROOT = 'www.googleapis.com/books/v1/'
export const SEARCH = 'volumes?q={search terms}&maxResults=40'
export const KEY = '&key=AIzaSyDbsLkYCm33D0yqapqMIallJ-L14G2CClo'
export const PAGINATION_START_INDEX = '&startIndex='
export const BASE_SEARCH = HTTPS + GOOGLE_API_ROOT + SEARCH + KEY
export const LOAD_MORE = HTTPS + GOOGLE_API_ROOT + SEARCH + PAGINATION_START_INDEX