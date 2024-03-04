import {Request} from '..';

export function login(params: any) {
  return Request.get<any>({
    url: '/get',
    params,
  });
}
