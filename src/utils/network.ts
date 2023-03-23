import {
  MAX_ITEM_QUERRY,
  SEARCH,
  PAGINATION_START_INDEX,
  ORDER_BY,
  KEY,
  SORT_CATEGORIES,
  HTTP,
} from "./../constants/api";
/** 
 * Изменяет url с HTTP на HTTPS
 * @param {String} url - url для изменения
 * @returns {String} - url с HTTPS
*/

export const changeHTTP = (url:string) => {
  const result = url ? url.replace(HTTP, HTTPS) : url

  return result
}


/**
 * Отправляет запрос fetch
 * @param {String} url - url для запроса
 * @return {Promise} - Promise с результатом запроса
 */

import { GOOGLE_API_ROOT, HTTPS } from "../constants/api";

export const getApiResource = async (url: string): Promise<any> => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("Could not fetch.", res.status);
      return false;
    }

    return await res.json();
  } catch (error) {
    let message = "Unknown Error";
    if (error instanceof Error) message = error.message;
    reportError({ message });
    return false;
  }
};

/**
 * Создает ссылку для запроса
 * @param  {String} serachValue - значение строки поиска
 * @param  {String} order - порядок отображения
 * @param  {String} sortCategories - сортировка по категориям
 * @param  {String} index - индекс первого элемента
 *
 * @return {String} - строка для запроса
 */

export const generateQuerryUrl = (
  serachValue: string,
  order: string,
  sortCategories: string,
  index: number
): string => {
  if(sortCategories === 'all') {
    return `${HTTPS + GOOGLE_API_ROOT + SEARCH + serachValue + MAX_ITEM_QUERRY + PAGINATION_START_INDEX + index + ORDER_BY + order +KEY}`
  }
  return `${HTTPS + GOOGLE_API_ROOT + SEARCH + serachValue +'+'+ SORT_CATEGORIES + sortCategories + MAX_ITEM_QUERRY + PAGINATION_START_INDEX + index + ORDER_BY + order +KEY}`;
};
