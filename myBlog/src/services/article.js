/**
 * 2018-3-22 Jifeng Cheng
 */

import request from '../utils/request';

export async function getArticle(params) {
  return request({
    url: '/readAll',
    method: 'get',
    data: params,
  });
}
