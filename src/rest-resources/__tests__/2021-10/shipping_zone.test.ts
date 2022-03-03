import {Session} from '../../../auth/session';
import {Context} from '../../../context';
import {ApiVersion} from '../../../base-types';

import {ShippingZone} from '../../2021-10';

describe('ShippingZone resource', () => {
  const domain = 'test-shop.myshopify.io';
  const headers = {'X-Shopify-Access-Token': 'this_is_a_test_token'};
  const test_session = new Session('1234', domain, '1234', true);
  test_session.accessToken = 'this_is_a_test_token';

  beforeEach(() => {
    Context.API_VERSION = ApiVersion.October21;
  });

  it('test_1', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    await ShippingZone.all({
      session: test_session,
    });

    expect({
      method: 'GET',
      domain,
      path: '/admin/api/2021-10/shipping_zones.json',
      query: '',
      headers,
      data: null
    }).toMatchMadeHttpRequest();
  });

});
