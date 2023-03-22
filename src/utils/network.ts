import {
  MAX_ITEM_QUERRY,
  SEARCH,
  PAGINATION_START_INDEX,
  ORDER_BY,
  KEY,
} from "./../constants/api";
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
    // console.error('Could not fetch.', error.message);
    return false;
  }
};

/**
 * Создает ссылку для запроса
 * @param  {String} serachValue - значение строки поиска
 * @param  {String} order - порядок отображения
 * @param  {String} index - индекс первого элемента
 *
 * @return {String} - строка для запроса
 */

export const generateQuerryUrl = (
  serachValue: string,
  order: string,
  index: number
): string => {
  return `${HTTPS + GOOGLE_API_ROOT + SEARCH + serachValue + MAX_ITEM_QUERRY + PAGINATION_START_INDEX + index + ORDER_BY + order + KEY}`;
};
